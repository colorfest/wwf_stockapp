import { Injectable } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
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
  currentFullPortfolio: any;
  currentFullPortfolioAsString: string = '';

  constructor() { }

  /**
   * Set the stock to delete and then pass to local storage deletion.
   * @param stock 
   */
  deleteFromPortfolio (stock: any) {
    this.stocks.push(stock);

    //remove it
    this.deleteStockFromLocalStorage(stock);

  }

  /**
   * Delete the selected stock from both wwfStockData and wwfSavedData
   * @param stock 
   */
  deleteStockFromLocalStorage(stock) {
    // empty current string
    this.currentPortfolioAsString = '';
    this.currentFullPortfolioAsString = '';

    // get local storage record
    this.currentPortfolio = localStorage.getItem("wwfStockData");
    this.currentFullPortfolio = localStorage.getItem("wwfSavedData");

    // loop through local storage and remove the stock
    if(this.currentPortfolio) {
      // set counter
      this.numberOfItems = this.currentPortfolio.length;
      var i = 0;
      var x = 0;

      // convert to json
      this.currentPortfolio = JSON.parse(this.currentPortfolio);
      this.currentFullPortfolio = JSON.parse(this.currentFullPortfolio);

      this.currentPortfolio.forEach(element => {

        // increment
        i++;

        if(element.tickerSymbol != stock.tickerSymbol) {
          var stockItem = JSON.stringify(element);
          this.currentPortfolioAsString += `${stockItem},`;
        } else {
          console.warn(`Do not include ${stock.tickerSymbol}`);
        }
      });

      this.currentFullPortfolio.forEach(element => {
        //increment
        x++;

        if (element[0].tickerSymbol != stock.tickerSymbol) {
          var stockItem = JSON.stringify(element);
          this.currentFullPortfolioAsString += `${stockItem},`;
        } else {
          console.warn(`Do not include ${stock.tickerSymbol}`);
        }
      });
    }

    // remove the last comma from each string
    this.currentFullPortfolioAsString = this.currentFullPortfolioAsString.slice(0, -1);
    this.currentPortfolioAsString = this.currentPortfolioAsString.slice(0,-1);


    // add brackets around string to convert for json
    this.currentPortfolioAsString = `[${this.currentPortfolioAsString}]`;
    this.currentFullPortfolioAsString = `[${this.currentFullPortfolioAsString}]`;

    // add new portfolio to local storage
    localStorage.setItem('wwfStockData', this.currentPortfolioAsString);
    localStorage.setItem('wwfSavedData', this.currentFullPortfolioAsString);
  }
}
