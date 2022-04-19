import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnTotalsService {

  private currentPortfolio: any = localStorage.getItem("wwfSavedData");

  constructor() {
    this.currentPortfolio = JSON.parse(this.currentPortfolio);
   }

  /**
   * Calculate the total cost basis (average cost * fractional shares)
   * @returns number
   */
  getCostBasisTotal(data) {
    console.log(`GET COST BASIS TOTAL`);
    console.log(data);

    var costBasisTotal: number = 0;

    // loop through and add up costs basis

    data.forEach(element => {
      console.log(element.fractionalShares);
      console.log(element.averageCost);
      costBasisTotal = costBasisTotal + (element.fractionalShares * element.averageCost);
    });

    return costBasisTotal;
  }

  /**
   * Calculate the total market value of the portfolio (regular market price * fractional shares)
   * @returns number
   */
  getMarketValueTotal(data: any) {
    var marketValueTotal: number = 0;

    // loop through and add up market value
    data.forEach(element => {
      marketValueTotal = marketValueTotal + (element.price.regularMarketPrice.raw *  element.fractionalShares);
    });

    return marketValueTotal;
  }

  /**
   * Calculate the total gain/loss of the portfolio ()
   * @returns number
   * @param incoming data
   */
  getGainLossTotal(data: any) {
    var gainLossTotal: number = 0;

    // loop through and add up gain/loss
    data.forEach(element => {
      gainLossTotal = gainLossTotal + (element.price.regularMarketPrice.raw *  element.fractionalShares) - (element.fractionalShares * element.averageCost);
    })

    return gainLossTotal;
  }

  /**
   * Average the total growth of the portfolio.
   * @param the incoming data
   * @returns number
   */
  getTotalGrowth(data: any) {
    var growthTotal: number = 0;
    var counter: number = 0;

    // loop through and average out the total growth
    data.forEach(element => {

      if (element.averageCost != '0.00')
        growthTotal = growthTotal + (element.averageCost == '0' ? (0.00) : ( (((element.price.regularMarketPrice.raw *  element.fractionalShares) - (element.fractionalShares * element.averageCost)) / (element.fractionalShares * element.averageCost)) * 100.00));
        counter++;
    })

    growthTotal = growthTotal / counter;

    return growthTotal;
  }

  /**
   * Calculate the total dividend yield average
   * @param the incoming data
   * @returns number
   */
  getTotalDividendYield(data: any) {
    var totalDividendYield: number = 0;
    var counter: number = 0;

    data.forEach(element => {
      if(element.summaryDetail.dividendYield.raw)
        totalDividendYield = totalDividendYield + element.summaryDetail.dividendYield.raw;
        counter++;
    })

    totalDividendYield = totalDividendYield / counter;

    return totalDividendYield;
  }

  /**
   * Calculate the average Yield On Cost
   * @param the incoming data
   * @returns number
   */
  getTotalYieldOnCost(data: any) {
    var totalYieldOnCost: number = 0;
    var counter: number = 0;

    data.forEach(element => {

      if ( (element.averageCost != '0.00')&&(element.summaryDetail.trailingAnnualDividendRate.raw != undefined) ) {
        totalYieldOnCost = totalYieldOnCost +  (element.averageCost == '0.00' ? 0 : ((element.summaryDetail.trailingAnnualDividendRate.raw / element.averageCost)));
        counter++;
      }
    })

    totalYieldOnCost = totalYieldOnCost / counter;

    return totalYieldOnCost;
  }

  /**
   * Add up all dividend annual income
   * @param the incoming data
   * @returns number
   */
  getAnnualIncome(data: any) {
    var annualIncome: number = 0;

    data.forEach(element => {
      if (element.summaryDetail.trailingAnnualDividendRate.raw)
        annualIncome = annualIncome + (element.summaryDetail.trailingAnnualDividendRate.raw * element.fractionalShares );
    })
    
    return annualIncome;
  }
}
