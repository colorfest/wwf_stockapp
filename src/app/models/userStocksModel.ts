export interface UserStocksModel {
    symbol: string;
    exchange: string;
    fractionalShares: number;
    averageCost: number;
    costBasis: number;
    marketValue: number;
    gainLoss: number;
    growth: number;
    comapnyName: string;
    currency: string;
    sector: string;
    marketPrice: number;
    annualDividend: number;
    frequency: number;
    exDividendDate: Date;
    cashAmount: number;
    declarationDate: Date;
    recordDate: Date;
    paymentDate: Date;
    dividendYield: number;
    yieldOnCost: number;
    annualIncome: number;
}