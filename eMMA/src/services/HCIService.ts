/*import {Request, RequestMethod,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import myPako from "../../node_modules/pako"
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';*/

export class HCIService {
apiURL:string;
url:string;
json:JSON;

  constructor() { }

  hciquery(aKey: string, aKeyType: string): Promise<any> {
    var key = aKey; // queried barcode
    var index = 'hospINDEX'; // TODO: Default
    var keyType = aKeyType; // TODO: Default
    let p = new Promise(function(resolve,reject){
      var username = 'EPN236342@hcisolutions.ch';
      var password = 'UMPbDJu7!W';

      var xhr = new XMLHttpRequest(),
      method = "GET",
      url = `https://index.hcisolutions.ch/index/current/get.aspx?schema=ARTICLE&keytype=${keyType}&key=${key}&index=${index}`;
      xhr.open(method, url, true);
      var reqHeader = {'Authorization': 'Basic ' + btoa(`${username}:${password}`)};

      if (reqHeader) {
        Object.keys(reqHeader).forEach((key) => {
          xhr.setRequestHeader(key, reqHeader[key]);
        });
      }
      xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          resolve(xhr.responseXML);
        } else {
          console.log("Error!");
        }
      };

      xhr.send();
    });

    return p;
    }
  }
