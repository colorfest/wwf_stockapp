import { Injectable } from '@angular/core';
import { DefaultData } from '../models/defaultData';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-key': '3bf97c15d1msh507caa13ebf8301p117843jsn0853d1f62bd6',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  constructor(private http: HttpClient) { }

  configUrl = '../../assets/testdata.json';
  
  dataUrl: string = '';
  // 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=PSEC&region=US';
  // 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=glo&region=US';


  getData(tickerSymbol) {
    this.dataUrl = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=${tickerSymbol}&region=US`;
    return this.http.get<DefaultData>(this.dataUrl, { headers: httpOptions.headers});
  }
}
