import { Component, OnInit } from '@angular/core';

import { YahooService } from '../../services/yahoo.service';
import { DefaultData } from '../../models/defaultData';
import { DeleteStockService } from '../../services/delete-stock.service';
import { ColumnTotalsService } from '../../services/column-totals.service';
import { RowUpdateService } from '../../services/row-update.service';
import { AppComponent} from '../../app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data$: any;
  config: DefaultData;
  error: any;
  inputItem: any;
  savedUserData: any;
  userStockData: any;
  displayData:any;
  showAlert: boolean = false;
  costBasisTotal: number;
  marketValueTotal: number;
  gainLossTotal: number;
  totalGrowth: number;
  totalDividendYield: number;
  totalYieldOnCost: number;
  annualIncome: number;

  constructor(private yahooService: YahooService, 
    public appComponent: AppComponent, 
    private columnTotalsService: ColumnTotalsService,
    private rowUpdateService: RowUpdateService,
    private deleteStockService: DeleteStockService) { }

    /**
     * Get the current saved data
     */
    fetchCurrentData() {

        // clean display data
        this.displayData = [];
    
        // convert to JSON
        this.savedUserData = this.getUserData("portfolio");
        this.savedUserData = JSON.parse(`${this.savedUserData}`);

        // sort alphabetically
        if ( Object.keys(this.savedUserData).length > 2) {
            this.sortData("ascending", "symbol");
        } 

        // set displayData to current savedUserData
        this.displayData = this.savedUserData;

        // get column totals
        this.getColumnTotals(null);
    }

    /**
     * Fetch new data from the API
     */
    fetchNewData() {

        // clean display data
        this.displayData = [];

        // counter
        var itemsProcessed = 0;
    
        // get wwfStockData as JSON
        this.userStockData = this.getUserData("stockList");
        this.userStockData = JSON.parse(this.userStockData);

        // parse through each stock and get API data
        if (this.userStockData) {
            this.userStockData.forEach(element => {
    
                this.data$ = this.yahooService.getData(element.tickerSymbol)
                  .subscribe(data => {
                    this.config = <DefaultData>data;
                    
                    // strinigfy data to be combined
                    var externalData = JSON.stringify(this.config);
                    var userData = JSON.stringify(element);
          
                    // combine
                    var fullData = `[${userData}, ${externalData}]`;
                    console.log(fullData);
          
                    // push to displayData
                    this.displayData.push(JSON.parse(fullData));
                    itemsProcessed++;

                    // update localstorage
                    if (itemsProcessed === this.userStockData.length) return localStorage.setItem('wwfSavedData', JSON.stringify(this.displayData))
                  },
                  error => this.error = error);
            });
        }


        // set new update date
        localStorage.setItem('wwfUpdateDate', new Date().getTime().toString());
    }

    /**
     * Sort the data by column header in either ascending or descending.
     * @param order the order in which we're sorting
     * @param column the column being sorted
     */
    sortData(order: string, column: string) {
        if ( (order == "ascending") && (column == "symbol") ) return this.savedUserData.sort((a,b) => a[0].tickerSymbol.localeCompare(b[0].tickerSymbol))
        if ( (order == "descending") && (column == "symbol") ) return this.savedUserData.sort((a,b) => b[0].tickerSymbol.localeCompare(a[0].tickerSymbol))

    }

    /**
     * Returns the JSON formatted data.
     * @returns JSON formatted data from saved local storage
     */
    getUserData(dataType: string) {
        if (dataType == "portfolio") return localStorage.getItem('wwfSavedData')
        if (dataType == "stockList") return localStorage.getItem('wwfStockData')
    }

    /**
     * Deletes a stock from the portfolio. Triggers updates for wwfStockData and wwfAPIData.
     * @param stock 
     */
    deleteStock(stock) {
        this.deleteStockService.deleteFromPortfolio(stock);
    }

    /**
     * Check the date and time of the last updated wwfStockData and compare.
     * If there are no new stocks being added or removed, or the last wwfUpdateTime 
     * is under 24 hours, keep wwfStockData the same. Otherwise, update from
     * api.
     * @param stockDataChanged boolean if we are adding or removing a stock
     */
    checkLastDataUpdate(stockDataChanged: boolean) {

        var HoursInMilliseconds = 86400000;
        var lastUpdateTimestamp = parseInt(localStorage.getItem('wwfUpdateDate'));

        // get current timestamp
        var date = new Date();
        var currentTime = date.getTime();

        if (currentTime > lastUpdateTimestamp + HoursInMilliseconds) return this.fetchNewData()
        return this.fetchCurrentData()
    
        // check if any stockData has not changed
        /*
        if (!stockDataChanged) {
    
            // get current timestamp
            var date = new Date();
            var currentTime = date.getTime();
    
            if (currentTime > lastUpdateTimestamp + HoursInMilliseconds) return this.fetchNewData()
            return this.fetchCurrentData()
    
        } else {
            this.fetchNewData();
            this.appComponent.stockAdded = false;
        }
        */
    }

    setNoDataDisplay () {
        // displays a noData modal window. In case user has no stocks entered or an error may have occurred.
        this.openModal();
    }

    openModal () {
        this.showAlert = true;
    }

    /**
     * Get the totals for each column
     * @param type - You can get all or specific columns to set totals for
     */
    getColumnTotals(type: string) {
        // set switch statement for different total types
        switch (type) {

            case "fractionalShares":
                //this.costBasisTotal = this.columnTotalsService.getCostBasisTotal();
                console.log(`Cost Basis total: ${this.costBasisTotal}`);
                break;

            case "averageCost":
                break;

            default:
                // this.costBasisTotal = this.columnTotalsService.getCostBasisTotal();
                // this.marketValueTotal = this.columnTotalsService.getMarketValueTotal();
                // this.gainLossTotal = this.columnTotalsService.getGainLossTotal();
                // this.totalGrowth = this.columnTotalsService.getTotalGrowth();
                // this.totalDividendYield = this.columnTotalsService.getTotalDividendYield();
                // this.totalYieldOnCost = this.columnTotalsService.getTotalYieldOnCost();
                // this.annualIncome = this.columnTotalsService.getAnnualIncome();
                break;
        }
    }


    onUpdateFractionalShares(event: any, data: any) {
        console.log('change event');
        console.log(event.target.value);
        console.log(data);
        this.rowUpdateService.updateFractionalShares(event.target.value, data);
    }

  ngOnInit(): void {
    /*

    // localStorage.clear();
    // this.inputItem = localStorage.wwfStockData;

    // check if we have any data.
    let wwfStockData = localStorage.getItem('wwfStockData');

    if (wwfStockData != null) {
        // set wwfUpdateDate if none exists
        let updateDate = localStorage.getItem('wwfUpdateDate');
    
        if (!updateDate) return localStorage.setItem('wwfUpdateDate', new Date().getTime().toString());
    
        // check last updateDate and compare to current time.
        // if is greater than 24 hours ago, call the API to update the data
        console.log('check last data update');
        this.checkLastDataUpdate(this.appComponent.stockAdded);
    } else {
        this.setNoDataDisplay();
    }
  */
  }

}
