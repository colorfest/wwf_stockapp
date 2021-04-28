import { Injectable } from '@angular/core';
import { count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteStockService {
  numberOfItems: number;
  stocks = [];
  portfolio = [];
  currentPortfolio: any;
  currentPortfolioAsString: string = '';

  constructor() { }

  deleteFromPortfolio (stock: any) {
    console.log('delete stock');
    console.log(stock);

    this.stocks.push(stock);

    //remove it
    this.deleteStockFromLocalStorage(stock);

  }

  deleteStockFromLocalStorage(stock) {
    // empty current string
    this.currentPortfolioAsString = '';

    // get local storage record
    this.currentPortfolio = localStorage.wwfUserData;

    // loop through local storage and remove the stock
    if(this.currentPortfolio) {
      // set counter
      this.numberOfItems = this.currentPortfolio.length;
      var i = 0;

      // convert to json
      this.currentPortfolio = JSON.parse(this.currentPortfolio);

      this.currentPortfolio.forEach(element => {
        // increment
        i++;

        if(element.tickerSymbol != stock.tickerSymbol) {
          var stockItem = JSON.stringify(element);
          if(i == this.currentPortfolio.length) {
            this.currentPortfolioAsString += `${stockItem}`;
          } else {
            this.currentPortfolioAsString += `${stockItem},`;
          }
        }
      });
    }

    // add brackets around string to convert for json
    this.currentPortfolioAsString = `[${this.currentPortfolioAsString}]`;

    // add new portfolio to local storage
    localStorage.setItem('wwfUserData', JSON.stringify(this.currentPortfolioAsString));

    console.log(this.currentPortfolioAsString);
  }
}
