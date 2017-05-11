import { Storage } from '@ionic/storage';

export class questionHandler {
  messageEMMA_Reminder_Morning = "Du möchtest also die Erinnerungsfunktion am Morgen testen"
  messageEMMA_Reminder_Midday = "Du möchtest also die Erinnerungsfunktion am Mittag testen"
  messageEMMA_Reminder_Evening = "Du möchtest also die Erinnerungsfunktion am Abend testen"
  messageEMMA_Reminder_Night = "Du möchtest also die Erinnerungsfunktion in der Nacht testen"
  messageEMMA_Delete_Storage = "OOOOPs: ich habe gerade den Specher gelöscht, Sorry -.-"
  messageEMMA_About = "Du möchtest also etwas über eMMA wissen."
  messageEMMA_Selfmedication = "Ich öffne die Selbstmedikation für dich"
  messageEMMA_Compliance = "Gerne zeige ich dir dein Medikationstagebuch an"
  messageEMMA_Nutrition = "Ich zeige dir, welche Nahrungsmittel du im momment nicht essen darfts."
  messageEMMA_InformationQuestion = "Wenn du Fragen zu einem Medikament hast, dann gib einfach den Namen ein + die Frage die du hast. Zum Beispiel Wie, Wann oder Wieso du es einnehmen must."
  messageEMMA_TooMutchInformation = "Huch, das war etwas viel auf Einmal. Bitte versuche es mit einer kürzeren Frage"


  messageEMMA_Not_Understand = [
  "Entschuldigung, ich habe dich leider nicht verstanden",
  "Sorry das habe ich verpasst. Bitte stelle eine andere Frage",
  "Diese Frage verstehe ich leider nicht. Kannst du es mit einer anderen Frage versuchen",
  "Ich Verstehe das leider nicht",
  "Diese Frage kann ich leider nicht beantworten"
  ];
  messageEMMA_Not_Understand_temp = new Array<any>();
  messageEMMA_TakingTime = [ "mogens um ", "mittags um  ", "abends um ", "In der Nacht um "
  ];

  drugList:JSON;
  takingTime:String[];
  constructor(private storage:Storage){
    }
    returnAnswer(question: String):any{
      var retVal:any = "";
      var list = new Array<any>()
      question = question.toUpperCase();
      //return
        var l = this.storage.get('takingTime').then((takingtimes)=>{
          this.takingTime = takingtimes;
          //return getMediDataFromStorage
        })
        list.push(l) //raus
        /*Ab it function und return not var*/
        var l2 = this.storage.get('medicationData').then((res)=>{
            this.drugList = res;
            console.log(this.drugList);
            for(var pos in this.drugList){
              if(question.includes(this.drugList[pos].title)){
                if(question.includes("WANN")||question.includes("ZEIT")||question.includes("UHR")){
                  retVal = retVal + "Du solltest " + this.drugList[pos].title +" an folgenden Uhrzeiten einnehmen:\n"
                  for(var time in this.drugList[pos].Pos[0].D){
                    if(this.drugList[pos].Pos[0].D[time]){
                      console.log(this.takingTime[time]);
                      retVal = retVal + this.messageEMMA_TakingTime[time]  + this.takingTime[time] + "Uhr, " + this.drugList[pos].Pos[0].D[time] + " "+ this.drugList[pos].Unit + "\n"
                    }
                  }
                  if(this.drugList[pos].AppInstr && this.drugList[pos].AppInstr.includes("Essen")){
                    retVal = retVal + "jeweils" + this.drugList[pos].AppInstr + "\n"
                  }
                }
                if((question.includes("WIE ")&& !question.includes("LANGE"))||question.includes("EINNAHME")){
                  if(this.drugList[pos].AppInstr){
                      retVal = retVal + "Du solltest " + this.drugList[pos].title + " " + this.drugList[pos].AppInstr  + " einnehmen\n";
                  }
                  else{
                    retVal = retVal + "Ich habe leider keine Informationen über die Einnahme von " + this.drugList[pos].title + "\n";
                  }
                }
                if(question.includes("WIESO")||question.includes("GRUND")){
                  if(this.drugList[pos].TkgRsn){
                    retVal = retVal + "Als Grund für die Einnahme von " + this.drugList[pos].title + " habe ich " + this.drugList[pos].TkgRsn  + " eingetragen\n";
                  }
                  else{
                    retVal = retVal + "Ich habe leider keine Informationen über den Grund der einnahme von " + this.drugList[pos].title; "\n" + "soll ich für dich Googeln?\n"
                  }
                }
                if(question.includes("LANGE")||question.includes("DAUER")){
                  if(this.drugList[pos].Pos[0].DtFrom && this.drugList[pos].Pos[0].DtTo){
                    retVal = retVal + "Du solltes " + this.drugList[pos].title + " an folgenden Daten einnehmen:\n" + "vom: " + this.drugList[pos].Pos[0].DtFrom + " bis " + this.drugList[pos].Pos[0].DtTo +"\n";
                  }
                  else{
                    retVal = retVal + "Ich habe leider keine Informationen über die Einnahmedauer von: " + this.drugList[pos].title + "\n";
                  }
                }
                if(retVal == ""){
                  retVal = retVal + "Was möchtest du über " + this.drugList[pos].title + " wissen?"
                }
              }
            }
            if(question === "?"){
              retVal = this.messageEMMA_InformationQuestion
              }
            else if(question.length > 50){
              retVal = this.messageEMMA_TooMutchInformation
            }
            else if(retVal == ""){
              if(question.includes("NAHRUNG")||(question.includes("ESSEN")&&question.includes("NICHT"))){
                retVal =  this.messageEMMA_Nutrition;
              }
              else if(question.includes("SELBSTMEDIKATION")||(question.includes("MEDIKAMENT")&&(question.includes("ZUSÄTZLICH")||(question.includes("ERFASSEN")))))
              {
                retVal = this.messageEMMA_Selfmedication;
              }
              else if(question.includes("REMINDER"))
              {
                if(question.includes("NACHT")){
                  retVal = this.messageEMMA_Reminder_Night
                }
                else if(question.includes("MITTAG")){
                  retVal = this.messageEMMA_Reminder_Midday
                }
                else if(question.includes("ABEND")){
                  retVal = this.messageEMMA_Reminder_Evening
                }else{
                  retVal = this.messageEMMA_Reminder_Morning
                }
              }
              else if(question.includes("ÜBER"))
              {
                retVal = this.messageEMMA_About
              }
              else if(question.includes("DELETE"))
              {
                retVal = this.messageEMMA_Delete_Storage;
              }
              else if(question.includes("AUSWERTUNG")||(question.includes("WELCHE")&&question.includes("NICHT")&&question.includes("EINGENOMMEN")))
              {
                retVal = this.messageEMMA_Compliance;
              }
              else if(question.includes("HALLO")||question.includes("HUHU")||question.includes("GUGUS"))
              {
                retVal = "Hallo, was möchtest du wissen?"
              }
              else if(question.includes("WER")&&question.includes("Du"))
              {
                retVal = "Ich bin eMMA. Deine Persöhliche elektronische Medikations Management Assistentin"
              }
              else if(question.includes("BEREITS")&&question.includes("GENOMMEN"))
              {
                retVal = "Ich verstehe. Ich werde dich also an die nächste Medikation nicht erinnern"
              }
              else if(question.includes("OK")||question.includes("DANKE")||question.includes("SUPER")||question.includes("TOLL")){
                retVal = "Freut mich dass ich dir helfen konnte"
              }
              else{
                if(this.messageEMMA_Not_Understand_temp.length == 0){
                  for (var name in this.messageEMMA_Not_Understand) {
                    this.messageEMMA_Not_Understand_temp[name] = this.messageEMMA_Not_Understand[name];
                  }
                }
                let random = Math.random()*this.messageEMMA_Not_Understand_temp.length;
                retVal = this.messageEMMA_Not_Understand_temp.splice(random,1)
              }
            }
            })
            list.push(l2) //To delete
 /* To delete*/
          return Promise.all(list).then(()=>{
            return retVal
          })

      }

}
