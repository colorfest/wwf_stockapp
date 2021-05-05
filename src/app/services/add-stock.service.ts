import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { DefaultData } from '../models/defaultData';
  
const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-key': '3bf97c15d1msh507caa13ebf8301p117843jsn0853d1f62bd6',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AddStockService {
  data$: any;
  error: any;
  config: DefaultData;
  pageMessage: string;
  stocks = [];
  portfolio = [];
  currentPortfolio: any;
  currentPortfolioAsString: string = '';
  currentSavedData: any;
  currentSavedDataAsString: string = '';
  dataUrl: string = '';
  fullData: any;
  newStockJSON: any;
  currentStocks: any;
  currentStocksJSON: any;
  currentStocksAsString: string;

  constructor(private http: HttpClient) { }
  
  
  addToPortfolio(stock) {
    console.log('addToPortfolio');
    this.stocks = [];
    this.stocks.push(stock);

    // add to user's saved stocks aka wwfStockData
    this.addToStockData();
  }

  addToStockData() {
    console.log('add ' + this.stocks + 'to local storage');
    var tickerSymbol = this.stocks[0].tickerSymbol;

    // empty current string
    this.currentPortfolioAsString = '';

    // get local storage record
    this.currentPortfolio = localStorage.wwfStockData;
    
    // loop through local storage and add as new array with new record
    if(this.currentPortfolio) {
      // format 
      this.currentPortfolio.replace(/\[/g, '').replace(/]/g, '')

      // convert to json
      this.currentPortfolio = JSON.parse(this.currentPortfolio);

      this.currentPortfolio.forEach(element => {
        if(element)
          var stockItem = JSON.stringify(element);
          this.currentPortfolioAsString += `${stockItem},`;
  
      });
    }

    // add new stock
    this.currentPortfolioAsString += JSON.stringify(this.stocks[0]);
    this.currentPortfolioAsString = `[${this.currentPortfolioAsString}]`;
    console.log(this.currentPortfolioAsString);

    // set new wwfStockData local storage
    localStorage.setItem('wwfStockData', this.currentPortfolioAsString);

    this.updatePortfolio();

  }

  updatePortfolio () {
    var finalData = '';
    var lastData = '';

    this.data$ = this.getStocks(this.stocks[0].tickerSymbol)
    .subscribe(data => {
      this.config = <DefaultData>data;
      
      // strinigfy data to be combined
      var externalData = JSON.stringify(this.config);

      // convert stock data to string
      var newStockData = JSON.stringify(this.stocks[0]);

      // combine with existing stock data string
      this.fullData = `[${newStockData}, ${externalData}]`;
      this.fullData.replace(/\\/g, '');

      // get existing portfolio data
      var currentPort = localStorage.getItem("wwfSavedData");

      if (currentPort != null) {
        // convert current portfolio to json
        var currentPortJSON = JSON.parse(currentPort);

        this.portfolio = currentPortJSON;

        // parse through json
        this.portfolio.forEach(element => {
          if(element)
            var stockItem = JSON.stringify(element);
            this.currentSavedDataAsString += `${stockItem},`;
        });

        console.log(this.currentSavedDataAsString);

        finalData = `[${this.currentSavedDataAsString} ${this.fullData}]`;

        // add to localstorage
        localStorage.setItem("wwfSavedData", finalData);

        // reset current saved data as string so we don't get duplicates
        this.currentSavedDataAsString = '';
        
      } else {
        lastData = `[${this.fullData}]`;
        localStorage.setItem("wwfSavedData", lastData);
      }
     },
    error => this.error = error);
  }


  // resources
  alertMessage(success: boolean) {
    // if true, display message
    if (success) return this.pageMessage = `${this.stocks[0].tickerSymbol} has been added to your portfolio.`
    return this.pageMessage = `There was an error with your upload. Please try again.`
  }

  getStocks(tickerSymbol) {
    this.dataUrl = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=${tickerSymbol}&region=US`;
    return this.http.get<DefaultData>(this.dataUrl, { headers: httpOptions.headers});
  }

  clearStocks() {
    this.stocks = [];
    return this.stocks;
  }
  
}
