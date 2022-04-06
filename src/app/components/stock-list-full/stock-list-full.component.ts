import { Component, OnInit } from '@angular/core';
import { DefaultData } from 'src/app/models/defaultData';
import { Stocks } from 'src/app/models/Stocks';
import { ColumnTotalsService } from 'src/app/services/column-totals.service';
import { DeleteStockService } from 'src/app/services/delete-stock.service';
import { RowUpdateService } from 'src/app/services/row-update.service';
import { StockInfoService } from 'src/app/services/stockInfo.service';
import { YahooService } from 'src/app/services/yahoo.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-stock-list-full',
  templateUrl: './stock-list-full.component.html',
  styleUrls: ['./stock-list-full.component.scss']
})
export class StockListFullComponent implements OnInit {
  data$: any;
  config: DefaultData;
  stockList: Stocks[];
  stockListing: any;
  error: any;
  displayData: any;
  showAlert: boolean = false;
  costBasisTotal: number;
  marketValueTotal: number;
  gainLossTotal: number;
  totalGrowth: number;
  totalDividendYield: number;
  totalYieldOnCost: number;
  annualIncome: number;

  testUser: Observable<any>;

  private fbSubs: Subscription[] = [];

  constructor(private stockInfoService: StockInfoService,
    private db: AngularFirestore,
    private yahooService: YahooService,
    private columnTotalsService: ColumnTotalsService,
    private rowUpdateService: RowUpdateService,
    private deleteStockService: DeleteStockService) { }

  setNoDataDisplay() {
    // displays a noData modal window. 
    this.openModal();
  }

  // control the visibility of the loader icon
  loaderDisplay(status: boolean) {
    
    // update column totals
    this.getColumnTotals(this.displayData);

  }

  /**
   * Deletes a stock from the portfolio. Triggers updates for wwfStockData and wwfAPIData.
   * @param stock 
   */
  deleteStock(stock) {
      this.deleteStockService.deleteFromPortfolio(stock);
  }
  


  onUpdateFractionalShares(event: any, data: any) {
    this.rowUpdateService.updateFractionalShares(event.target.value, data);
  }

  checkLastDataUpdate() {

    var HoursInMilliseconds = 86400000;
    var lastUpdateTimestamp = parseInt(localStorage.getItem('wwfUpdateDate'));

    // get current timestamp
    var date = new Date();
    var currentTime = date.getTime();

    if (currentTime > lastUpdateTimestamp + HoursInMilliseconds) return this.fetchNewData()
    return this.fetchCurrentData()
  }

  getColumnTotals(type: string) {
    console.log('GET COLUMN TOTALS')
    // set switch statement for different total types
    switch (type) {
      case "fractionalShares":
        break;

      case "averageCost":
        break;

      default: 
        this.costBasisTotal = this.columnTotalsService.getCostBasisTotal(this.displayData);
        this.marketValueTotal = this.columnTotalsService.getMarketValueTotal(this.displayData);
        this.gainLossTotal = this.columnTotalsService.getGainLossTotal(this.displayData);
        this.totalGrowth = this.columnTotalsService.getTotalGrowth(this.displayData);
        this.totalDividendYield = this.columnTotalsService.getTotalDividendYield(this.displayData);
        this.totalYieldOnCost = this.columnTotalsService.getTotalDividendYield(this.displayData);
        this.annualIncome = this.columnTotalsService.getAnnualIncome(this.displayData);
    }
  }

  /**
   * Get the current data
   */
  fetchCurrentData() {
    console.log(`FETCH DATA`);
  }

  /**
   * Fetch new data from the API
   */
  fetchNewData() {
    console.log(`FETCH NEW DATA`);

    // clean display data
    this.displayData = [];

    // counter
    var itemsProcessed = 0;

    // parse through each stock and get API data
    if (this.stockList) {
      this.stockList.forEach(element => {
        this.data$ = this.yahooService.getData(element.tickerSymbol)
        .subscribe(data => {
          this.config = <DefaultData>data; // data from yahoo

          let finalData = { ...this.config, ...element}; // combine yahoo and firebase data for full stock info

          var res = [];
          for (var x in finalData) {
            finalData.hasOwnProperty(x) && res.push(finalData[x]);
          }

          // push to displayData array
          this.displayData.push(finalData);

          itemsProcessed++;

          // update loading
          if (itemsProcessed === this.stockList.length) return this.loaderDisplay(false)
        },
        error => this.error = error);
      });
    }
  }

  /**
   * Open modal window to display messages to user.
   */
  openModal() {

  }

  checkStockDataComplete() {
    // if (this.displayData != null) {
    //   this.checkLastDataUpdate();
    // } else {
    //   console.log(`set no data display.`);
    //   this.setNoDataDisplay();
    // }
    this.fetchNewData();
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.fbSubs.push(this.stockInfoService.getStocks().subscribe((stockList) => {
      this.stockList = stockList; 

      console.log('stock list');
      console.log(this.stockList);

      this.checkStockDataComplete();
    }, (err: Error) => {
      console.log(`An error occurred in retrieving the user's stock info.`);
    }))

    // this.testUser = this.stockInfoService.getTestUser();
    // console.log('TEST USER');
    // console.log(this.testUser);debugger;
  }
}
