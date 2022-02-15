import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RowUpdateService {

  constructor() { }

  updateFractionalShares(newValue: number, stockData: any) {
    console.log(`New value: ${newValue}`);
    console.log('Stock data');console.log(stockData);
  }
}
