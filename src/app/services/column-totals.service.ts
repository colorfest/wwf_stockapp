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
  getCostBasisTotal() {

    var costBasisTotal: number = 0;

    // loop through and add up costs basis
    this.currentPortfolio.forEach(element => {
      costBasisTotal = costBasisTotal + (element[0].fractionalShares * element[0].averageCost);
    });

    return costBasisTotal;
  }

  /**
   * Calculate the total market value of the portfolio (regular market price * fractional shares)
   * @returns number
   */
  getMarketValueTotal() {
    var marketValueTotal: number = 0;

    // loop through and add up market value
    this.currentPortfolio.forEach(element => {
      marketValueTotal = marketValueTotal + (element[1].price.regularMarketPrice.raw *  element[0].fractionalShares);
    });

    return marketValueTotal;
  }

  /**
   * Calculate the total gain/loss of the portfolio ()
   * @returns number
   */
  getGainLossTotal() {
    var gainLossTotal: number = 0;

    // loop through and add up gain/loss
    this.currentPortfolio.forEach(element => {
      gainLossTotal = gainLossTotal + (element[1].price.regularMarketPrice.raw *  element[0].fractionalShares) - (element[0].fractionalShares * element[0].averageCost);
    })

    return gainLossTotal;
  }

  /**
   * Average the total growth of the portfolio.
   * @returns number
   */
  getTotalGrowth() {
    var growthTotal: number = 0;
    var counter: number = 0;

    // loop through and average out the total growth
    this.currentPortfolio.forEach(element => {
      if (element[0].averageCost != '0.00')
        growthTotal = growthTotal + (element[0].averageCost == '0.00' ? (0.00) : ( (((element[1].price.regularMarketPrice.raw *  element[0].fractionalShares) - (element[0].fractionalShares * element[0].averageCost)) / (element[0].fractionalShares * element[0].averageCost)) * 100.00));
        counter++;
    })

    growthTotal = growthTotal / counter;

    return growthTotal;
  }

  /**
   * Calculate the total dividend yield average
   * @returns number
   */
  getTotalDividendYield() {
    var totalDividendYield: number = 0;
    var counter: number = 0;

    this.currentPortfolio.forEach(element => {
      if(element[1].summaryDetail.dividendYield.raw)
        totalDividendYield = totalDividendYield + element[1].summaryDetail.dividendYield.raw;
        counter++;
    })

    totalDividendYield = totalDividendYield / counter;

    return totalDividendYield;
  }

  /**
   * Calculate the average Yield On Cost
   * @returns number
   */
  getTotalYieldOnCost() {
    var totalYieldOnCost: number = 0;
    var counter: number = 0;

    this.currentPortfolio.forEach(element => {

      if ( (element[0].averageCost != '0.00')&&(element[1].summaryDetail.trailingAnnualDividendRate.raw != undefined) ) {
        totalYieldOnCost = totalYieldOnCost +  (element[0].averageCost == '0.00' ? 0 : ((element[1].summaryDetail.trailingAnnualDividendRate.raw / element[0].averageCost)));
        counter++;
      }
    })

    totalYieldOnCost = totalYieldOnCost / counter;

    return totalYieldOnCost;
  }

  /**
   * Add up all dividend annual income
   * @returns number
   */
  getAnnualIncome() {
    var annualIncome: number = 0;

    this.currentPortfolio.forEach(element => {
      if (element[1].summaryDetail.trailingAnnualDividendRate.raw)
        annualIncome = annualIncome + (element[1].summaryDetail.trailingAnnualDividendRate.raw * element[0].fractionalShares );
    })
    
    return annualIncome;
  }
}
