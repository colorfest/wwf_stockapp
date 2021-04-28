import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddStockService {
  stocks = [];
  portfolio = [];
  currentPortfolio: any;
  currentPortfolioAsString: string = '';

  addToPortfolio(stock) {
    console.log('addToPortfolio');
    this.stocks.push(stock);

    // add stock info to user's local storage
    this.addToLocalStorage(stock);
  }

  addToLocalStorage(stock: string) {
    console.log('add to local storage');

    // empty current string
    this.currentPortfolioAsString = '';

    // get local storage record
    this.currentPortfolio = localStorage.wwfUserData;
    this.currentPortfolio.replace(/\[/g, '').replace(/]/g, '');
    
    // loop through local storage and add as new array with new record
    if(this.currentPortfolio) {

      // convert to json
      this.currentPortfolio = JSON.parse(this.currentPortfolio);

      this.currentPortfolio.forEach(element => {
        if(element)
          var stockItem = JSON.stringify(element);
          this.currentPortfolioAsString += `${stockItem},`;
  
      });
    }

    // add new stock
    this.currentPortfolioAsString += JSON.stringify(stock);
    this.currentPortfolioAsString = `[${this.currentPortfolioAsString}]`;
    console.log(this.currentPortfolioAsString);

    // convert to json to sort alphabetically
    
    this.portfolio = JSON.parse(this.currentPortfolioAsString);
    /*
    this.portfolio = this.portfolio.sort((a,b) => {
      if(a < b) return -1;
      if(a > b) return 1;
      return 0;
    });
    */

    console.log(this.portfolio);

    // convert back to string and store in local storage wwfUserData
    localStorage.setItem('wwfUserData', JSON.stringify(this.portfolio));

    console.log(localStorage.wwfUserData);
    
  }



  getStocks() {
    return this.stocks;
  }

  clearStocks() {
    this.stocks = [];
    return this.stocks;
  }

  constructor() { }
}
