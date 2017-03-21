

export class eMMAText {
  constructor(){

  }
  //Standard phrase for EMMA
  messageEMMA_answer_Yes_Please = "Ja, gerne";
  messageEMMA_answer_No_Thanks = "Nein, danke";
  messageEMMA_answer_Yes = "Ja"
  messageEMMA_answer_No = "Nein"
  messageEMMA_Not_Understand = [
  "Entschuldigung, ich habe dich leider nicht verstanden",
  "Sorry das habe ich verpasst. Bitte stelle eine andere Frage",
  "Diese Frage verstehe ich leider nicht. Kannst du es mit einer Anderen Frage versuchen",
  "Ich Verstehe das leider nicht",
  "Diese Frage kann ich leider nicht beantworten"
  ];
  messageEMMA_EnterPassword = "Bitte gib deinen Pin ein"
  messageEMMA_WrongPin = "Das war der flasche Pin. Versuche es bitte erneut"
  messageEMMA_ask_Possible_Question = "Für eine Übersicht was du mich alles fragen kannst, schreibe einfach ein Fragezeichen(?) in das Textfeld "
  messageEMMA_Possible_Question ="Das kannst du mich alles Fragen:"

  //Messages used in the First App Start
  messageEMMA_FirstStart_NoName = "Du hast leider keinen Namen eingegeben.\nBitte versuche es erneut"
  messageEMMA_FirstStart_Hello="Hallo! Mein Name ist eMMA. Ich werde dich bei deiner Medikaiton untersützen. Bitte trage deinen Vornamen im Feld unten ein. Klicke dafür einfach in das leere Feld.";
  messageEMMA_FirstStart_questionPin = "Ich werde dir als erstes einige Fragen stellen um die App vollständig einzurichten. Möchtest du deine App mit einem Pin schützen?\nDie App könte für dich persöhliche Daten enthalten.";
  messageEMMA_FirstStart_questionPin_Yes = "Ja, gerne";
  messageEMMA_FirstStart_questionPin_No = "Nein, ich will keinen Pin";
  messageEMMA_FirstStart_Pin = "Gib nun bitte den Pin ein! Du kannst ihn jederzeit unter den Einstellungen ändern.";
  messageEMMA_FirstStart_questionAthlete = "Bist du Leistungssportler?";
  messageEMMA_FirstStart_questionAthlete_No = "uuuh nein, dass ist nicht für mich";
  messageEMMA_FirstStart_questionAthlete_Yes = "Ja, ich bin Leistungssportler";
  messageEMMA_FirstStart_questionDriver = "Besitzt du einen Führerausweis?"
  messageEMMA_FirstStart_questionDriver_Yes = "Ja, ich fahre Auto";
  messageEMMA_FirstStart_questionDriver_No = "Nein, ich fahre nicht";
  messageEMMA_FirstStart_questionImportMediplan = "Willst du einen eMediplan Importieren?";
  messageEMMA_FirstStart_questionImportMediplan_Yes = "Ja, importiere bitte meine Daten";
  messageEMMA_FirstStart_questionImportMediplan_No = "Ich habe leider keinen";
  messageEMMA_FirstStart_ImportMediplan_OpenScanner = "Ich öffne nun den Scanner für dich"
  messageEMMA_FirstStart_ImportMediplan_sucsess = "Dein Medikaiton wurde erfasst"
  messageEMMA_FirstStart_ImportMediplan_Error = "Bitte versuche erneut deine Medikation einzuscannen"
  messageEMMA_FirstStart_questionImporteHealth = "Willst du dein Elektronisches Patientendossier verbinden?";
  messageEMMA_FirstStart_questionImporteHealth_Yes = "Ja gerne würde mich anmelden"
  messageEMMA_FirstStart_questionImporteHealth_No = "Nein, ich besitze kein Dossier"
  messageEMMA_FirstStart_questioneHalthUsername = "Bitte gib deinen Usernamen im Feld ein"
  messageEMMA_FirstStart_questioneHalthPasword = "Bitte gib dein Passwort ein"
  messageEMMA_FirstStart_eHealthWrong = "Username Oder Passwort falsch"
  messageEMMA_FirstStart_eHealthCorrect= "Login Erfolgreich"
  messageEMMA_FirstStart_questionDatasecurity = "Willst du von mir noch etwas über die Datenschutzbestimmungen wissen?"
  messageEMMA_FirstStart_questionDatasecurity_Yes = "Ja, zeigt mir bitte mehr";
  messageEMMA_FirstStart_questionDatasecurity_No =  "Nein, gerade nicht danke";
  messageEMMA_FirstStart_Datasecurity = "BlaBlaDatenschutz wichtig BlaBla\n du findest die Datenschutzbestimmungen auch im Impressum wieder.\n gehe dafür einfach im Menü auf Über eMMA"
  messageEMMA_FirstStart_Einnahmezeit0800 = "Möchtest du die Morgentliche Einnahmezeit von 08:00 ändern?"
  messageEMMA_FirstStart_Einnahmezeit1200 = "Möchtest du die Morgentliche Einnahmezeit von 12:00 ändern?"
  messageEMMA_FirstStart_Einnahmezeit1800 = "Möchtest du die Morgentliche Einnahmezeit von 18:00 ändern?"
  messageEMMA_FirstStart_Einnahmezeit2200 = "Möchtest du die Morgentliche Einnahmezeit von 22:00 ändern?"
  messageEMMA_FirstStart_newTime = "Bitte gibt die neue Zeit ein an der ich dich erinnern soll, deine Medikamente zu nehmen?"
  messageEMMA_FirstStart_Tourtorial = "Bitte sei immer offen und ehrlich zu mir. So kann ich deine Medikamenten Einnahme optimal unersützen. \n Du bist nun im Fragemodus. Du kannst immer auf diesen Dialog zurückkehren um mir Fragen zustellen. Du kannst jetzt die restliche App Erkunden. Dort findest du folgende Funktionen:";


  //Messages used in the normal App Start
  messageEMMA_Normal_Start_1 = "Hallo" //Name des Benuters
  messageEMMA_Normal_Start_2 = "Gerade stehen keine Erinnerungen an. Hast du irgendwelche Fragen an mich?";

  //Messages used for a reminder
  messageEMMA_reminderAppStart_questionAll_1 = "Hallo " //Name des Benuters
  messageEMMA_reminderAppStart_questionAll_2 = "\nEs ist jetzt "
  messageEMMA_reminderAppStart_questionAll_3 = "Uhr \nHast du deine Medikamente schon eingenommen?"
  messageEMMA_reminderAppStart_questionAll_Yes = "Ja, das habe ich"
  messageEMMA_reminderAppStart_questionAll_No = "Nein, habe ich nicht"
  messageEMMA_reminderAppStart_finish = "Vielen Dank für die Antwort.  Du bist nun wieder im Fragemodus."
  messageEMMA_reminderAppStart_show_Medication = "Ich Zeige dir nun deine Aktuelle Medikation \n Bitte wähle aus welche du nich eingenommen hast"
  messageEMMA_reminderAppStart_why_1 = "Folgende Medikamente hast du nicht genommen:"
  messageEMMA_reminderAppStart_why_2 = "Kannst du mir den Grund dafür nennen?"
  messageEMMA_reminderAppStart_why_sick ="Mir ist gerade nicht wohl"
  messageEMMA_reminderAppStart_why_sideEffect ="Auf Grund von Nebenwirkungne"
  messageEMMA_reminderAppStart_why_Note = "Es hatte einen Anderen Grund"
  messageEMMA_reminderAppStart_why_notSpecified = "Das möchte ich nicht sagen"
  messageEMMA_reminderAppStart_why_LeaveNote = "Bitte hinterlasse mir eine Notiz"
  messageEMMA_reminderAppStart_why_sideEffectMayInclude_1 = "Folgende Nebenwirkungen können bei deiner Medikation auftreten."
  messageEMMA_reminderAppStart_why_sideEffectMayInclude_2 ="Hast du eine oder mehrere dieser Nebenwirkungen?"



}
