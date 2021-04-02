import { Injectable } from '@angular/core';
import { DefaultData } from '../models/defaultData';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  
}

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  constructor(private http: HttpClient) { }

  configUrl = '../../assets/testdata.json';
  
  dataUrl: string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=PSEC&region=US';
  //'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=glo&region=US';


  getData() {
    return this.http.get<DefaultData>(this.dataUrl, { headers: httpOptions.headers});
  }
}
