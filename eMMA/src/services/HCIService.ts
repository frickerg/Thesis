import {RequestOptions, Request, RequestMethod,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import myPako from "../../node_modules/pako"

export class barcodeService {
apiURL:string;
http:Http;
url:string;
json:JSON;

      constructor(storage: Storage, http:Http) {
        this.http = http;
        this.url = "https://int.hcisolutions.ch/MedicationActiveForm/cds/check";

        var testData = "CHMED16A1H4sIAAAAAAAEAK1UzW7aQBB+lY2vsaNd24DNLQmhRQktIrSRWuWwtge8wl6j9bpNQLxNHqO3vFhn7TglAXKqhPF4Z3bmm29+NtZ5pVOrb/W6lFHqudQPOz3LtgYaD13Kug6jDgtmLOgzr+95p9TtU4oGowQNIt+bh91o7vjzwHV8CCMn5FHghDGN58E86PDQOBtDMntcgdVntSxinoPUpdX/ubHOV6uRLLVCb5LHKUkgJ1dlCbKN4fshY14TsvHi2dakaG4P8J/Z1Mbn3oAeqiJvgdMQf3Uqs2LnjIXWFm0nqoyji0dUDNQZ+VJoMlRcrm3zqkDOIUvw7rTgaDH5iuJsuZiWEr9GqFxqURiE36QwRN3Orq2tvWkAuwGjXtf/GDA9BNhzKDsA7lytNfnMZWmT8fMfGacgU141FB0CeJFhTYs4TVQVL4+AZKHb890PWKXHWP1PIC/TIoNSgxISjZag9oHutkaliDjLz2xipKRS2CnC6CoBSgOZgCoLCfKk7RqXscD3jqfnHqxBx2EMMzyQ3tUDz1cZkGuuMpvcPT/JhXjNbDR+Qz+oKhWLSi7+pTS+eZ9RBIJcQMLVHK1wCAscjHpAavg4AWLxW8RLyHZyYPslOthHL40/klNAa2ayeUU3FBDtku3sARMlWVck5w9nxMdXRvTz0yITyDgjMx5loJFwEFJCmtfl3UPv97oe83pH2P8QKyKdNWZFY0a392+r8X5THWqu2xihqTW8H1HjiGuBy8fqb6yLesmx0PfqsjM0vhTaxLjjWWIy1k0Rh19wYZkgoGvqPoFMUDBob15U46psdDd4A1vmqll7JszgptRjMLDqM97Q8FrRBp9rW995hjYBqwvSqN1WzVo1C2idxjSuvYwa1qf40en17tvxdlvBawW/FTqt0G2vMSR4i8SkOEAY4dRnpBcS5nrE75CuofhWKwDdtPYCu4TjfibMbLgfYoXHoRviUkV/+dLkDoq8sExEqcmvIidm6y+5WZrlKuOSRLAAYRjTJ9b2LyrDpWuFBgAA"
        var b64Data  =   testData.substring(9);

        // Decode base64 (convert ascii to binary)
        var strData     = atob(b64Data);

        // Convert binary string to character-number array
        var charData    = strData.split('').map(function(x){return x.charCodeAt(0);});

        // Turn number array into byte-array
        var binData     = new Uint8Array(charData);

        // Pako magic
        var data        = myPako.inflate(binData);

        // Convert gunzipped byteArray back to ascii string:
        let strData2: string  = String.fromCharCode.apply(null, new Uint16Array(data));

        this.json = JSON.parse(strData2);

      }

//Post JSON in Angular 2

      POST(url, data) {

        let test_this = { "search": "person" };
        let headers2 = new Headers ({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        this.http.post(this.url, test_this, options)



        var headers = new Headers(), authtoken = localStorage.getItem('authtoken');
        headers.append("Content-Type", 'application/json');

        if (authtoken) {
        headers.append("Authorization", 'Token ' + authtoken)
        }
        headers.append("Accept", 'application/json');

        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this.apiURL + url,
            headers: headers,
            body: data
        })


        return this.http.request(new Request(requestoptions))
        .map((res: Response) => {
            if (res) {
                return { status: res.status, json: res.json() }
            }
        });
    }


        /*  createAuthorizationHeader(headers: Headers) {
            headers.append('Authorization', 'Basic ' +
              btoa('username:password'));
          }
          get(url) {
          let headers = new Headers();
          this.createAuthorizationHeader(headers);
          return this.http.get(url, {
            headers: headers
          });
          }

          post(url, data) {
          let headers = new Headers();
          this.createAuthorizationHeader(headers);
          return this.http.post(url, data, {
            headers: headers
          });
        }*/
}