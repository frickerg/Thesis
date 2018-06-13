// call in questionHandler like this:
// var instInf = new instructionInterface(this.storage, this.convPage);
// alert(eval("instInf." + retVal.split("#")[1] + "('values')"));
//




import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BotService } from 'botService';
//import { barcodeService } from 'barcodeService';
import { ConversationPage} from '../../pages/conversation/conversation';

@Injectable()
export class instructionInterface{

	barcodeService: any;
  drugList: any;
  takingTime: string[];
  convPage: any;
  emma: any;

	constructor(private storage: Storage, convPage: any) {
		this.barcodeService = "hi";//new barcodeService(storage);
	  this.convPage = convPage;
    this.emma = convPage.eMMA;
	}


	/*----------------------------------------------------------------------------*/
	/* method finds a medicament from this.drugList and returns it as an Object
	/* @param name: the name of the medicament to find
	/* @return: the medicament as an object. null if not found.
	/* @author: hessg1
	/*----------------------------------------------------------------------------*/
	findMedicament(name: string): any {
	 var medi = null;
	  for(var pos in this.drugList){
	    if(this.drugList[pos].title.toUpperCase() == name.toUpperCase()){
	      medi = this.drugList[pos];
	    }
	  }
	  return medi;
	}

	test(){
		return "Hallo";
	}


	/*----------------------------------------------------------------------------*/
	/* the following methods are the actual functions of the instruction interface
	/*
	/* @return: the return value that can be passed on to the user
	/* @author: hessg1
	/*----------------------------------------------------------------------------*/

	// saves the user name to storage
	name(values: string[]){
		this.storage.set('name', values[2]);
		return values[3];
	}

	// figures WHEN the medication has to be taken
	medWhen(values: string[]){
		var retVal = values[3];
		var medi = this.findMedicament(values[2]);
		if(medi == null){
			return this.emma.messageEMMA.error;
		}
		else{
			for (var time in medi.Pos[0].D) {
				if (medi.Pos[0].D[time]) {
					return retVal + this.emma.messageEMMA.takingTime[time] + this.takingTime[time] + " Uhr, " + medi.Pos[0].D[time] + " " + medi.Unit + ",\n"
				}
			}
			//if the application instrucion has someting to do with "Essen" this information is also given to the user
			if (medi.AppInstr && medi.AppInstr.includes("Essen")) {
				return retVal + "jeweils " + medi.AppInstr + ".";
			}
		}
	}

	//figures WHY the medication has to be taken
	medWhy(values: string[]){
		var retVal = values[3];
		var medi = this.findMedicament(values[2]);
		if(medi == null){
			retVal = this.emma.messageEMMA.error;
		}
		else if (medi.TkgRsn) {
			retVal += ' ' + medi.TkgRsn + '.';
		}
		else {
			retVal =  'Ich habe leider keine Informationen über den Grund der Einnahme von ' + values[2] + ' erfasst.'; // TODO: include link to Compendium
		}
		return retVal;
	}







}
