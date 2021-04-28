import { Component, OnInit } from '@angular/core';

import { DefaultService } from '../../services/default.service';
import { DefaultData } from '../../models/defaultData';
import { DeleteStockService } from '../../services/delete-stock.service';

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
  displayData: any;

  constructor(private defaultService: DefaultService,
    private deleteStockService: DeleteStockService) { }

  fetchData() {
    // clean display data
    this.displayData = [];
    

    // check if current savedData was recorded after the last time data changed or 5pm EST
    this.checkLastDataUpdate(false);

    this.displayData = [
        [
            {
                "tickerSymbol": "ABBV",
                "fractionalShares": 0.3,
                "averageCost": 99.33
            },
            {
                "financialsTemplate": {
                    "code": "N",
                    "maxAge": 1
                },
                "price": {
                    "quoteSourceName": "Nasdaq Real Time Price",
                    "regularMarketOpen": {
                        "raw": 107.82,
                        "fmt": "107.82"
                    },
                    "averageDailyVolume3Month": {
                        "raw": 7460914,
                        "fmt": "7.46M",
                        "longFmt": "7,460,914"
                    },
                    "exchange": "NYQ",
                    "regularMarketTime": 1618238944,
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 108.06,
                        "fmt": "108.06"
                    },
                    "shortName": "AbbVie Inc.",
                    "averageDailyVolume10Day": {
                        "raw": 7800600,
                        "fmt": "7.8M",
                        "longFmt": "7,800,600"
                    },
                    "longName": "AbbVie Inc.",
                    "regularMarketChange": {
                        "raw": 0.3153,
                        "fmt": "0.32"
                    },
                    "currencySymbol": "$",
                    "regularMarketPreviousClose": {
                        "raw": 107.54,
                        "fmt": "107.54"
                    },
                    "preMarketPrice": {
                        "raw": 107.8,
                        "fmt": "107.80"
                    },
                    "preMarketTime": 1618234115,
                    "exchangeDataDelayedBy": 0,
                    "toCurrency": null,
                    "postMarketChange": {},
                    "postMarketPrice": {},
                    "exchangeName": "NYSE",
                    "preMarketChange": {
                        "raw": 0.260101,
                        "fmt": "0.26"
                    },
                    "circulatingSupply": {},
                    "regularMarketDayLow": {
                        "raw": 107.36,
                        "fmt": "107.36"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "regularMarketPrice": {
                        "raw": 107.8553,
                        "fmt": "107.86"
                    },
                    "regularMarketVolume": {
                        "raw": 1394743,
                        "fmt": "1.39M",
                        "longFmt": "1,394,743.00"
                    },
                    "lastMarket": null,
                    "regularMarketSource": "FREE_REALTIME",
                    "openInterest": {},
                    "marketState": "REGULAR",
                    "underlyingSymbol": null,
                    "marketCap": {
                        "raw": 190346264576,
                        "fmt": "190.35B",
                        "longFmt": "190,346,264,576.00"
                    },
                    "quoteType": "EQUITY",
                    "preMarketChangePercent": {
                        "raw": 0.0024186498,
                        "fmt": "0.24%"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "symbol": "ABBV",
                    "preMarketSource": "FREE_REALTIME",
                    "maxAge": 1,
                    "fromCurrency": null,
                    "regularMarketChangePercent": {
                        "raw": 0.0029319322,
                        "fmt": "0.29%"
                    }
                },
                "secFilings": {
                    "filings": [
                        {
                            "date": "2021-03-12",
                            "epochDate": 1615586606,
                            "type": "8-K",
                            "title": "Temporary Suspension of Trading Under Registrant's Employee Benefit Plans, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-035654&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-02-19",
                            "epochDate": 1613761648,
                            "type": "10-K",
                            "title": "Annual Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-21-000008&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-02-03",
                            "epochDate": 1612356124,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-21-000003&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-01-12",
                            "epochDate": 1610487133,
                            "type": "8-K",
                            "title": "Regulation FD Disclosure, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-003462&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-01-06",
                            "epochDate": 1609970467,
                            "type": "8-K",
                            "title": "Change in Directors or Principal Officers",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-21-001570&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-11-18",
                            "epochDate": 1605737834,
                            "type": "8-K",
                            "title": "Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-126925&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-11-12",
                            "epochDate": 1605193572,
                            "type": "8-K",
                            "title": "Change in Directors or Principal Officers",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-124093&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-11-04",
                            "epochDate": 1604501677,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000032&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-10-30",
                            "epochDate": 1604062390,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000029&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-10-19",
                            "epochDate": 1603116885,
                            "type": "8-K",
                            "title": "Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-115857&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-10-02",
                            "epochDate": 1601672779,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-111687&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-08-04",
                            "epochDate": 1596553047,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000023&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-07-31",
                            "epochDate": 1596203025,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000019&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-14",
                            "epochDate": 1589490080,
                            "type": "8-K/A",
                            "title": "ABBVIE INC. FILES (8-K/A) Disclosing Completion of Acquisition or Disposition of Assets, Financial Statements and Exhibi",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-061687&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-14",
                            "epochDate": 1589487483,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-061621&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-12",
                            "epochDate": 1589317905,
                            "type": "8-K",
                            "title": "Disclosing Submission of Matters to a Vote of Security Holders",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-060256&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-08",
                            "epochDate": 1588969976,
                            "type": "8-K",
                            "title": "Disclosing Completion of Acquisition or Disposition of Assets, Creation of a Direct Financial Ob",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-058837&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-08",
                            "epochDate": 1588932759,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000015&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-06",
                            "epochDate": 1588759551,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-057093&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-01",
                            "epochDate": 1588333539,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000010&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-04-27",
                            "epochDate": 1587989675,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-051316&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-04-20",
                            "epochDate": 1587384867,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-048487&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-04-06",
                            "epochDate": 1586174946,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-043408&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-03-23",
                            "epochDate": 1584965668,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-037093&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-03-09",
                            "epochDate": 1583761537,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-030507&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-02-24",
                            "epochDate": 1582553626,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-024097&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-02-21",
                            "epochDate": 1582300388,
                            "type": "10-K",
                            "title": "Annual Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000007&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-02-14",
                            "epochDate": 1581721519,
                            "type": "8-K",
                            "title": "Disclosing Termination of a Material Definitive Agreement",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-022002&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-02-07",
                            "epochDate": 1581079738,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-20-000004&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-01-27",
                            "epochDate": 1580131627,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-20-006940&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-12-20",
                            "epochDate": 1576850543,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-074689&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-26",
                            "epochDate": 1574776012,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-067264&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-18",
                            "epochDate": 1574083314,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-064905&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-13",
                            "epochDate": 1573681496,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-063366&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-08",
                            "epochDate": 1573211272,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-061290&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-07",
                            "epochDate": 1573136325,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-060862&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-06",
                            "epochDate": 1573072291,
                            "type": "8-K",
                            "title": "Disclosing Regulation FD Disclosure, Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-060477&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-06",
                            "epochDate": 1573053495,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-19-000030&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-01",
                            "epochDate": 1572609095,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-19-000026&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-10-25",
                            "epochDate": 1572006398,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-056315&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-10-22",
                            "epochDate": 1571776970,
                            "type": "8-K",
                            "title": "Disclosing Amendments to Articles of Inc. or Bylaws; Change in Fiscal Year, Financial Statements",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-055567&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-09-26",
                            "epochDate": 1569528434,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001410578-19-001438&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-09-23",
                            "epochDate": 1569270339,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001410578-19-001379&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-09-16",
                            "epochDate": 1568635072,
                            "type": "8-K",
                            "title": "Disclosing Regulation FD Disclosure, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001410578-19-001244&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-08-30",
                            "epochDate": 1567196448,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001410578-19-000980&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-08-05",
                            "epochDate": 1565022903,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-19-000023&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-07-26",
                            "epochDate": 1564141489,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001551152-19-000021&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-07-16",
                            "epochDate": 1563309841,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-040574&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-06-25",
                            "epochDate": 1561498049,
                            "type": "8-K",
                            "title": "Disclosing Entry into a Material Definitive Agreement, Creation of a Direct Financial Obligation",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001104659-19-037446&nav=1&src=Yahoo",
                            "maxAge": 1
                        }
                    ],
                    "maxAge": 86400
                },
                "quoteType": {
                    "exchange": "NYQ",
                    "shortName": "AbbVie Inc.",
                    "longName": "AbbVie Inc.",
                    "exchangeTimezoneName": "America/New_York",
                    "exchangeTimezoneShortName": "EDT",
                    "isEsgPopulated": false,
                    "gmtOffSetMilliseconds": "-14400000",
                    "quoteType": "EQUITY",
                    "symbol": "ABBV",
                    "messageBoardId": "finmb_141885706",
                    "market": "us_market"
                },
                "calendarEvents": {
                    "maxAge": 1,
                    "earnings": {
                        "earningsDate": [
                            {
                                "raw": 1619740800,
                                "fmt": "2021-04-30"
                            }
                        ],
                        "earningsAverage": {
                            "raw": 2.85,
                            "fmt": "2.85"
                        },
                        "earningsLow": {
                            "raw": 2.79,
                            "fmt": "2.79"
                        },
                        "earningsHigh": {
                            "raw": 3.01,
                            "fmt": "3.01"
                        },
                        "revenueAverage": {
                            "raw": 12796500000,
                            "fmt": "12.8B",
                            "longFmt": "12,796,500,000"
                        },
                        "revenueLow": {
                            "raw": 12627800000,
                            "fmt": "12.63B",
                            "longFmt": "12,627,800,000"
                        },
                        "revenueHigh": {
                            "raw": 13478000000,
                            "fmt": "13.48B",
                            "longFmt": "13,478,000,000"
                        }
                    },
                    "exDividendDate": {
                        "raw": 1618358400,
                        "fmt": "2021-04-14"
                    },
                    "dividendDate": {
                        "raw": 1620950400,
                        "fmt": "2021-05-14"
                    }
                },
                "summaryDetail": {
                    "previousClose": {
                        "raw": 107.54,
                        "fmt": "107.54"
                    },
                    "regularMarketOpen": {
                        "raw": 107.82,
                        "fmt": "107.82"
                    },
                    "twoHundredDayAverage": {
                        "raw": 101.086395,
                        "fmt": "101.09"
                    },
                    "trailingAnnualDividendYield": {
                        "raw": 0.04500651,
                        "fmt": "4.50%"
                    },
                    "payoutRatio": {
                        "raw": 1.7353,
                        "fmt": "173.53%"
                    },
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 108.06,
                        "fmt": "108.06"
                    },
                    "navPrice": {},
                    "averageDailyVolume10Day": {
                        "raw": 7800600,
                        "fmt": "7.8M",
                        "longFmt": "7,800,600"
                    },
                    "totalAssets": {},
                    "regularMarketPreviousClose": {
                        "raw": 107.54,
                        "fmt": "107.54"
                    },
                    "fiftyDayAverage": {
                        "raw": 106.677055,
                        "fmt": "106.68"
                    },
                    "trailingAnnualDividendRate": {
                        "raw": 4.84,
                        "fmt": "4.84"
                    },
                    "open": {
                        "raw": 107.82,
                        "fmt": "107.82"
                    },
                    "toCurrency": null,
                    "averageVolume10days": {
                        "raw": 7800600,
                        "fmt": "7.8M",
                        "longFmt": "7,800,600"
                    },
                    "expireDate": {},
                    "yield": {},
                    "algorithm": null,
                    "dividendRate": {
                        "raw": 5.2,
                        "fmt": "5.20"
                    },
                    "exDividendDate": {
                        "raw": 1618358400,
                        "fmt": "2021-04-14"
                    },
                    "beta": {
                        "raw": 0.806398,
                        "fmt": "0.81"
                    },
                    "circulatingSupply": {},
                    "startDate": {},
                    "regularMarketDayLow": {
                        "raw": 107.36,
                        "fmt": "107.36"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "trailingPE": {
                        "raw": 39.652683,
                        "fmt": "39.65"
                    },
                    "regularMarketVolume": {
                        "raw": 1394743,
                        "fmt": "1.39M",
                        "longFmt": "1,394,743"
                    },
                    "lastMarket": null,
                    "maxSupply": {},
                    "openInterest": {},
                    "marketCap": {
                        "raw": 190346264576,
                        "fmt": "190.35B",
                        "longFmt": "190,346,264,576"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "averageVolume": {
                        "raw": 7460914,
                        "fmt": "7.46M",
                        "longFmt": "7,460,914"
                    },
                    "priceToSalesTrailing12Months": {
                        "raw": 4.155669,
                        "fmt": "4.16"
                    },
                    "dayLow": {
                        "raw": 107.36,
                        "fmt": "107.36"
                    },
                    "ask": {
                        "raw": 107.43,
                        "fmt": "107.43"
                    },
                    "ytdReturn": {},
                    "askSize": {
                        "raw": 800,
                        "fmt": "800",
                        "longFmt": "800"
                    },
                    "volume": {
                        "raw": 1394743,
                        "fmt": "1.39M",
                        "longFmt": "1,394,743"
                    },
                    "fiftyTwoWeekHigh": {
                        "raw": 113.41,
                        "fmt": "113.41"
                    },
                    "forwardPE": {
                        "raw": 7.7705545,
                        "fmt": "7.77"
                    },
                    "maxAge": 1,
                    "fromCurrency": null,
                    "fiveYearAvgDividendYield": {
                        "raw": 4.16,
                        "fmt": "4.16"
                    },
                    "fiftyTwoWeekLow": {
                        "raw": 78.66,
                        "fmt": "78.66"
                    },
                    "bid": {
                        "raw": 107.5,
                        "fmt": "107.50"
                    },
                    "tradeable": false,
                    "dividendYield": {
                        "raw": 0.0484,
                        "fmt": "4.84%"
                    },
                    "bidSize": {
                        "raw": 1300,
                        "fmt": "1.3k",
                        "longFmt": "1,300"
                    },
                    "dayHigh": {
                        "raw": 108.06,
                        "fmt": "108.06"
                    }
                },
                "symbol": "ABBV",
                "assetProfile": {
                    "zip": "60064-6400",
                    "sector": "Healthcare",
                    "fullTimeEmployees": 47000,
                    "compensationRisk": 3,
                    "auditRisk": 9,
                    "longBusinessSummary": "AbbVie Inc. discovers, develops, manufactures, and sells pharmaceuticals in the worldwide. The company offers HUMIRA, a therapy administered as an injection for autoimmune and intestinal BehÃ§et's diseases; SKYRIZI to treat moderate to severe plaque psoriasis in adults; RINVOQ, a JAK inhibitor for the treatment of moderate to severe active rheumatoid arthritis in adult patients; IMBRUVICA to treat adult patients with chronic lymphocytic leukemia (CLL), small lymphocytic lymphoma (SLL), mantle cell lymphoma, waldenstrÃ¶m's macroglobulinemia, marginal zone lymphoma, and chronic graft versus host disease; VENCLEXTA, a BCL-2 inhibitor used to treat adults with CLL or SLL; and MAVYRET to treat patients with chronic HCV genotype 1-6 infection. It also provides CREON, a pancreatic enzyme therapy for exocrine pancreatic insufficiency; Synthroid used in the treatment of hypothyroidism; AndroGel for males diagnosed with symptomatic low testosterone; Linzess/Constella to treat irritable bowel syndrome with constipation and chronic idiopathic constipation; Lupron for the palliative treatment of advanced prostate cancer, endometriosis and central precocious puberty, and patients with anemia caused by uterine fibroids; and Botox therapeutic. In addition, the company offers ORILISSA, a nonpeptide small molecule gonadotropin-releasing hormone antagonist for women with moderate to severe endometriosis pain; Duopa and Duodopa, a levodopa-carbidopa intestinal gel to treat Parkinson's disease; Lumigan/Ganfort, a bimatoprost ophthalmic solution for the reduction of elevated intraocular pressure (IOP) in patients with open angle glaucoma (OAG) or ocular hypertension; Ubrelvy to treat migraine with or without aura in adults; Alphagan/ Combigan, an alpha-adrenergic receptor agonist for the reduction of IOP in patients with OAG; and Restasis, a calcineurin inhibitor immunosuppressant to increase tear production. The company was incorporated in 2012 and is based in North Chicago, Illinois.",
                    "city": "North Chicago",
                    "phone": "847 932 7900",
                    "state": "IL",
                    "shareHolderRightsRisk": 9,
                    "compensationAsOfEpochDate": 1609372800,
                    "governanceEpochDate": 1617235200,
                    "boardRisk": 7,
                    "country": "United States",
                    "companyOfficers": [
                        {
                            "totalPay": {
                                "raw": 7356798,
                                "fmt": "7.36M",
                                "longFmt": "7,356,798"
                            },
                            "exercisedValue": {
                                "raw": 7761926,
                                "fmt": "7.76M",
                                "longFmt": "7,761,926"
                            },
                            "yearBorn": 1954,
                            "name": "Mr. Richard A. Gonzalez",
                            "title": "Chairman & CEO",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 22532880,
                                "fmt": "22.53M",
                                "longFmt": "22,532,880"
                            },
                            "age": 66
                        },
                        {
                            "totalPay": {
                                "raw": 4286841,
                                "fmt": "4.29M",
                                "longFmt": "4,286,841"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1966,
                            "name": "Dr. Michael E. Severino",
                            "title": "Vice Chairman & Pres",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 18958468,
                                "fmt": "18.96M",
                                "longFmt": "18,958,468"
                            },
                            "age": 54
                        },
                        {
                            "totalPay": {
                                "raw": 3224779,
                                "fmt": "3.22M",
                                "longFmt": "3,224,779"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1970,
                            "name": "Mr. Robert A. Michael",
                            "title": "Exec. VP & CFO",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 1564349,
                                "fmt": "1.56M",
                                "longFmt": "1,564,349"
                            },
                            "age": 50
                        },
                        {
                            "totalPay": {
                                "raw": 4196342,
                                "fmt": "4.2M",
                                "longFmt": "4,196,342"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1963,
                            "name": "Ms. Laura J. Schumacher",
                            "title": "Vice Chairman of External Affairs, Chief Legal Officer & Corp. Sec.",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 14310789,
                                "fmt": "14.31M",
                                "longFmt": "14,310,789"
                            },
                            "age": 57
                        },
                        {
                            "maxAge": 1,
                            "name": "Dr. Azita  Saleki-Gerhardt",
                            "age": 57,
                            "title": "Exec. VP of Operations",
                            "yearBorn": 1963,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Dr. Thomas J. Hudson",
                            "age": 58,
                            "title": "Sr. VP of R&D and Chief Scientific Officer",
                            "yearBorn": 1962,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Ms. Elizabeth  Shea",
                            "title": "VP of Investor Relations",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Timothy J. Richmond",
                            "age": 54,
                            "title": "Exec. VP & Chief HR Officer",
                            "yearBorn": 1966,
                            "fiscalYear": 2013,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Scott C. Brun M.D.",
                            "title": "VP of Scientific Affairs & Head of AbbVie Ventures",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Henry O. Gosebruch",
                            "age": 47,
                            "title": "Exec. VP & Chief Strategy Officer",
                            "yearBorn": 1973,
                            "fiscalYear": 2016,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        }
                    ],
                    "website": "http://www.abbvie.com",
                    "maxAge": 86400,
                    "overallRisk": 7,
                    "address1": "1 North Waukegan Road",
                    "industry": "Drug Manufacturers—General"
                },
                "pageViews": {
                    "shortTermTrend": "DOWN",
                    "midTermTrend": "UP",
                    "longTermTrend": "UP",
                    "maxAge": 1
                }
            }
        ],
        [
            {
                "tickerSymbol": "AAPL",
                "fractionalShares": 0.167,
                "averageCost": 136.36
            },
            {
                "financialsTemplate": {
                    "code": "N",
                    "maxAge": 1
                },
                "price": {
                    "quoteSourceName": "Nasdaq Real Time Price",
                    "regularMarketOpen": {
                        "raw": 132.52,
                        "fmt": "132.52"
                    },
                    "averageDailyVolume3Month": {
                        "raw": 107051780,
                        "fmt": "107.05M",
                        "longFmt": "107,051,780"
                    },
                    "exchange": "NMS",
                    "regularMarketTime": 1618238946,
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 132.85,
                        "fmt": "132.85"
                    },
                    "shortName": "Apple Inc.",
                    "averageDailyVolume10Day": {
                        "raw": 89529520,
                        "fmt": "89.53M",
                        "longFmt": "89,529,520"
                    },
                    "longName": "Apple Inc.",
                    "regularMarketChange": {
                        "raw": -1.5849915,
                        "fmt": "-1.58"
                    },
                    "currencySymbol": "$",
                    "regularMarketPreviousClose": {
                        "raw": 132.995,
                        "fmt": "132.99"
                    },
                    "preMarketPrice": {
                        "raw": 132.53,
                        "fmt": "132.53"
                    },
                    "preMarketTime": 1618234199,
                    "exchangeDataDelayedBy": 0,
                    "toCurrency": null,
                    "postMarketChange": {},
                    "postMarketPrice": {},
                    "exchangeName": "NasdaqGS",
                    "preMarketChange": {
                        "raw": -0.464996,
                        "fmt": "-0.46"
                    },
                    "circulatingSupply": {},
                    "regularMarketDayLow": {
                        "raw": 131.05,
                        "fmt": "131.05"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "regularMarketPrice": {
                        "raw": 131.41,
                        "fmt": "131.41"
                    },
                    "regularMarketVolume": {
                        "raw": 27777755,
                        "fmt": "27.78M",
                        "longFmt": "27,777,755.00"
                    },
                    "lastMarket": null,
                    "regularMarketSource": "FREE_REALTIME",
                    "openInterest": {},
                    "marketState": "REGULAR",
                    "underlyingSymbol": null,
                    "marketCap": {
                        "raw": 2206124212224,
                        "fmt": "2.21T",
                        "longFmt": "2,206,124,212,224.00"
                    },
                    "quoteType": "EQUITY",
                    "preMarketChangePercent": {
                        "raw": -0.00349634,
                        "fmt": "-0.35%"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "symbol": "AAPL",
                    "preMarketSource": "FREE_REALTIME",
                    "maxAge": 1,
                    "fromCurrency": null,
                    "regularMarketChangePercent": {
                        "raw": -0.011917678,
                        "fmt": "-1.19%"
                    }
                },
                "secFilings": {
                    "filings": [
                        {
                            "date": "2021-02-24",
                            "epochDate": 1614202478,
                            "type": "8-K",
                            "title": "Submission of Matters to a Vote of Security Holders",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-054710&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-02-08",
                            "epochDate": 1612819923,
                            "type": "8-K",
                            "title": "Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-032394&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-01-28",
                            "epochDate": 1611831743,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-21-000010&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-01-27",
                            "epochDate": 1611783081,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-21-000009&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-01-05",
                            "epochDate": 1609882443,
                            "type": "8-K",
                            "title": "Change in Directors or Principal Officers",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-21-001982&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-10-30",
                            "epochDate": 1604055976,
                            "type": "10-K",
                            "title": "Annual Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000096&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-10-29",
                            "epochDate": 1604007124,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000094&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-08-20",
                            "epochDate": 1597959111,
                            "type": "8-K",
                            "title": "Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-225672&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-08-07",
                            "epochDate": 1596838860,
                            "type": "8-K",
                            "title": "Amendments to Articles of Inc. or Bylaws; Change in Fiscal Year, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-213158&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-07-31",
                            "epochDate": 1596193466,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000062&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-07-30",
                            "epochDate": 1596153394,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000060&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-11",
                            "epochDate": 1589229159,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-139112&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-05-01",
                            "epochDate": 1588329945,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000052&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-04-30",
                            "epochDate": 1588278795,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000050&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-02-18",
                            "epochDate": 1582025728,
                            "type": "8-K",
                            "title": "Disclosing Regulation FD Disclosure, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-20-039203&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-01-29",
                            "epochDate": 1580296028,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000010&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-01-28",
                            "epochDate": 1580247103,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-20-000008&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-15",
                            "epochDate": 1573817072,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-19-292676&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-10-31",
                            "epochDate": 1572516447,
                            "type": "10-K",
                            "title": "Annual Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-19-000119&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-10-30",
                            "epochDate": 1572467523,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-19-000117&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-09-11",
                            "epochDate": 1568233320,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001193125-19-242975&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-07-31",
                            "epochDate": 1564605221,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-19-000076&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-07-30",
                            "epochDate": 1564518682,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0000320193-19-000073&nav=1&src=Yahoo",
                            "maxAge": 1
                        }
                    ],
                    "maxAge": 86400
                },
                "quoteType": {
                    "exchange": "NMS",
                    "shortName": "Apple Inc.",
                    "longName": "Apple Inc.",
                    "exchangeTimezoneName": "America/New_York",
                    "exchangeTimezoneShortName": "EDT",
                    "isEsgPopulated": false,
                    "gmtOffSetMilliseconds": "-14400000",
                    "quoteType": "EQUITY",
                    "symbol": "AAPL",
                    "messageBoardId": "finmb_24937",
                    "market": "us_market"
                },
                "calendarEvents": {
                    "maxAge": 1,
                    "earnings": {
                        "earningsDate": [
                            {
                                "raw": 1619568000,
                                "fmt": "2021-04-28"
                            }
                        ],
                        "earningsAverage": {
                            "raw": 0.98,
                            "fmt": "0.98"
                        },
                        "earningsLow": {
                            "raw": 0.85,
                            "fmt": "0.85"
                        },
                        "earningsHigh": {
                            "raw": 1.09,
                            "fmt": "1.09"
                        },
                        "revenueAverage": {
                            "raw": 77024200000,
                            "fmt": "77.02B",
                            "longFmt": "77,024,200,000"
                        },
                        "revenueLow": {
                            "raw": 70790900000,
                            "fmt": "70.79B",
                            "longFmt": "70,790,900,000"
                        },
                        "revenueHigh": {
                            "raw": 83193000000,
                            "fmt": "83.19B",
                            "longFmt": "83,193,000,000"
                        }
                    },
                    "exDividendDate": {
                        "raw": 1612483200,
                        "fmt": "2021-02-05"
                    },
                    "dividendDate": {
                        "raw": 1613001600,
                        "fmt": "2021-02-11"
                    }
                },
                "summaryDetail": {
                    "previousClose": {
                        "raw": 132.995,
                        "fmt": "132.99"
                    },
                    "regularMarketOpen": {
                        "raw": 132.52,
                        "fmt": "132.52"
                    },
                    "twoHundredDayAverage": {
                        "raw": 123.96743,
                        "fmt": "123.97"
                    },
                    "trailingAnnualDividendYield": {
                        "raw": 0.006067897,
                        "fmt": "0.61%"
                    },
                    "payoutRatio": {
                        "raw": 0.2177,
                        "fmt": "21.77%"
                    },
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 132.85,
                        "fmt": "132.85"
                    },
                    "navPrice": {},
                    "averageDailyVolume10Day": {
                        "raw": 89529520,
                        "fmt": "89.53M",
                        "longFmt": "89,529,520"
                    },
                    "totalAssets": {},
                    "regularMarketPreviousClose": {
                        "raw": 132.995,
                        "fmt": "132.99"
                    },
                    "fiftyDayAverage": {
                        "raw": 123.20206,
                        "fmt": "123.20"
                    },
                    "trailingAnnualDividendRate": {
                        "raw": 0.807,
                        "fmt": "0.81"
                    },
                    "open": {
                        "raw": 132.52,
                        "fmt": "132.52"
                    },
                    "toCurrency": null,
                    "averageVolume10days": {
                        "raw": 89529520,
                        "fmt": "89.53M",
                        "longFmt": "89,529,520"
                    },
                    "expireDate": {},
                    "yield": {},
                    "algorithm": null,
                    "dividendRate": {
                        "raw": 0.82,
                        "fmt": "0.82"
                    },
                    "exDividendDate": {
                        "raw": 1612483200,
                        "fmt": "2021-02-05"
                    },
                    "beta": {
                        "raw": 1.219525,
                        "fmt": "1.22"
                    },
                    "circulatingSupply": {},
                    "startDate": {},
                    "regularMarketDayLow": {
                        "raw": 131.05,
                        "fmt": "131.05"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "trailingPE": {
                        "raw": 35.641445,
                        "fmt": "35.64"
                    },
                    "regularMarketVolume": {
                        "raw": 27777755,
                        "fmt": "27.78M",
                        "longFmt": "27,777,755"
                    },
                    "lastMarket": null,
                    "maxSupply": {},
                    "openInterest": {},
                    "marketCap": {
                        "raw": 2206124212224,
                        "fmt": "2.21T",
                        "longFmt": "2,206,124,212,224"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "averageVolume": {
                        "raw": 107051780,
                        "fmt": "107.05M",
                        "longFmt": "107,051,780"
                    },
                    "priceToSalesTrailing12Months": {
                        "raw": 7.5003796,
                        "fmt": "7.50"
                    },
                    "dayLow": {
                        "raw": 131.05,
                        "fmt": "131.05"
                    },
                    "ask": {
                        "raw": 131.79,
                        "fmt": "131.79"
                    },
                    "ytdReturn": {},
                    "askSize": {
                        "raw": 900,
                        "fmt": "900",
                        "longFmt": "900"
                    },
                    "volume": {
                        "raw": 27777755,
                        "fmt": "27.78M",
                        "longFmt": "27,777,755"
                    },
                    "fiftyTwoWeekHigh": {
                        "raw": 145.09,
                        "fmt": "145.09"
                    },
                    "forwardPE": {
                        "raw": 27.959576,
                        "fmt": "27.96"
                    },
                    "maxAge": 1,
                    "fromCurrency": null,
                    "fiveYearAvgDividendYield": {
                        "raw": 1.39,
                        "fmt": "1.39"
                    },
                    "fiftyTwoWeekLow": {
                        "raw": 66.3575,
                        "fmt": "66.36"
                    },
                    "bid": {
                        "raw": 131.78,
                        "fmt": "131.78"
                    },
                    "tradeable": false,
                    "dividendYield": {
                        "raw": 0.0062,
                        "fmt": "0.62%"
                    },
                    "bidSize": {
                        "raw": 800,
                        "fmt": "800",
                        "longFmt": "800"
                    },
                    "dayHigh": {
                        "raw": 132.85,
                        "fmt": "132.85"
                    }
                },
                "symbol": "AAPL",
                "assetProfile": {
                    "zip": "95014",
                    "sector": "Technology",
                    "fullTimeEmployees": 147000,
                    "compensationRisk": 2,
                    "auditRisk": 6,
                    "longBusinessSummary": "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch, and other Apple-branded and third-party accessories. It also provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store, that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. In addition, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It sells and delivers third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was founded in 1977 and is headquartered in Cupertino, California.",
                    "city": "Cupertino",
                    "phone": "408-996-1010",
                    "state": "CA",
                    "shareHolderRightsRisk": 1,
                    "compensationAsOfEpochDate": 1609372800,
                    "governanceEpochDate": 1617235200,
                    "boardRisk": 1,
                    "country": "United States",
                    "companyOfficers": [
                        {
                            "totalPay": {
                                "raw": 14769259,
                                "fmt": "14.77M",
                                "longFmt": "14,769,259"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1961,
                            "name": "Mr. Timothy D. Cook",
                            "title": "CEO & Director",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 59
                        },
                        {
                            "totalPay": {
                                "raw": 4595583,
                                "fmt": "4.6M",
                                "longFmt": "4,595,583"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1964,
                            "name": "Mr. Luca  Maestri",
                            "title": "CFO & Sr. VP",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 56
                        },
                        {
                            "totalPay": {
                                "raw": 4594137,
                                "fmt": "4.59M",
                                "longFmt": "4,594,137"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1964,
                            "name": "Mr. Jeffrey E. Williams",
                            "title": "Chief Operating Officer",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 56
                        },
                        {
                            "totalPay": {
                                "raw": 4591310,
                                "fmt": "4.59M",
                                "longFmt": "4,591,310"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1964,
                            "name": "Ms. Katherine L. Adams",
                            "title": "Sr. VP, Gen. Counsel & Sec.",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 56
                        },
                        {
                            "totalPay": {
                                "raw": 4614684,
                                "fmt": "4.61M",
                                "longFmt": "4,614,684"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1967,
                            "name": "Ms. Deirdre  O'Brien",
                            "title": "Sr. VP of People & Retail",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 53
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Chris  Kondo",
                            "title": "Sr. Director of Corp. Accounting",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. James  Wilson",
                            "title": "Chief Technology Officer",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Ms. Mary  Demby",
                            "title": "Chief Information Officer",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Ms. Nancy  Paxton",
                            "title": "Sr. Director of Investor Relations & Treasury",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Greg  Joswiak",
                            "title": "Sr. VP of Worldwide Marketing",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        }
                    ],
                    "website": "http://www.apple.com",
                    "maxAge": 86400,
                    "overallRisk": 1,
                    "address1": "One Apple Park Way",
                    "industry": "Consumer Electronics"
                },
                "pageViews": {
                    "shortTermTrend": "UP",
                    "midTermTrend": "UP",
                    "longTermTrend": "UP",
                    "maxAge": 1
                }
            }
        ],
        [
            {
                "tickerSymbol": "ACN",
                "fractionalShares": 0.15,
                "averageCost": 255
            },
            {
                "financialsTemplate": {
                    "code": "N",
                    "maxAge": 1
                },
                "price": {
                    "quoteSourceName": "Nasdaq Real Time Price",
                    "regularMarketOpen": {
                        "raw": 285.97,
                        "fmt": "285.97"
                    },
                    "averageDailyVolume3Month": {
                        "raw": 2142939,
                        "fmt": "2.14M",
                        "longFmt": "2,142,939"
                    },
                    "exchange": "NYQ",
                    "regularMarketTime": 1618238904,
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 287,
                        "fmt": "287.00"
                    },
                    "shortName": "Accenture plc",
                    "averageDailyVolume10Day": {
                        "raw": 2108520,
                        "fmt": "2.11M",
                        "longFmt": "2,108,520"
                    },
                    "longName": "Accenture plc",
                    "regularMarketChange": {
                        "raw": -1.0599976,
                        "fmt": "-1.06"
                    },
                    "currencySymbol": "$",
                    "regularMarketPreviousClose": {
                        "raw": 287.71,
                        "fmt": "287.71"
                    },
                    "preMarketPrice": {
                        "raw": 285.79,
                        "fmt": "285.79"
                    },
                    "preMarketTime": 1618234194,
                    "exchangeDataDelayedBy": 0,
                    "toCurrency": null,
                    "postMarketChange": {},
                    "postMarketPrice": {},
                    "exchangeName": "NYSE",
                    "preMarketChange": {
                        "raw": -1.91998,
                        "fmt": "-1.92"
                    },
                    "circulatingSupply": {},
                    "regularMarketDayLow": {
                        "raw": 285.2,
                        "fmt": "285.20"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "regularMarketPrice": {
                        "raw": 286.65,
                        "fmt": "286.65"
                    },
                    "regularMarketVolume": {
                        "raw": 386687,
                        "fmt": "386.69k",
                        "longFmt": "386,687.00"
                    },
                    "lastMarket": null,
                    "regularMarketSource": "FREE_REALTIME",
                    "openInterest": {},
                    "marketState": "REGULAR",
                    "underlyingSymbol": null,
                    "marketCap": {
                        "raw": 182208200704,
                        "fmt": "182.21B",
                        "longFmt": "182,208,200,704.00"
                    },
                    "quoteType": "EQUITY",
                    "preMarketChangePercent": {
                        "raw": -0.00667333,
                        "fmt": "-0.67%"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "symbol": "ACN",
                    "preMarketSource": "FREE_REALTIME",
                    "maxAge": 1,
                    "fromCurrency": null,
                    "regularMarketChangePercent": {
                        "raw": -0.003684257,
                        "fmt": "-0.37%"
                    }
                },
                "secFilings": {
                    "filings": [
                        {
                            "date": "2021-03-18",
                            "epochDate": 1616068654,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-21-000106&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-03-18",
                            "epochDate": 1616068466,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-21-000104&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2021-02-03",
                            "epochDate": 1612387151,
                            "type": "8-K",
                            "title": "Submission of Matters to a Vote of Security Holders",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-21-000050&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-12-17",
                            "epochDate": 1608206948,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000431&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-12-17",
                            "epochDate": 1608205993,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000429&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-12-03",
                            "epochDate": 1607031956,
                            "type": "8-K",
                            "title": "Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000417&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-10-22",
                            "epochDate": 1603402230,
                            "type": "10-K",
                            "title": "Annual Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000376&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-10-05",
                            "epochDate": 1601902591,
                            "type": "8-K",
                            "title": "Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000341&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-09-24",
                            "epochDate": 1600948489,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000336&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-06-25",
                            "epochDate": 1593087151,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000251&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-06-25",
                            "epochDate": 1593085832,
                            "type": "8-K",
                            "title": "Results of Operations and Financial Condition",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000249&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-03-19",
                            "epochDate": 1584615558,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000158&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-03-19",
                            "epochDate": 1584614962,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000157&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-01-30",
                            "epochDate": 1580419012,
                            "type": "8-K",
                            "title": "Disclosing Change in Directors or Principal Officers, Submission of Matters to a Vote of Secur",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000043&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-01-29",
                            "epochDate": 1580306565,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000041&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2020-01-13",
                            "epochDate": 1578919080,
                            "type": "8-K",
                            "title": "Disclosing Regulation FD Disclosure, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-20-000026&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-12-19",
                            "epochDate": 1576756559,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000395&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-12-19",
                            "epochDate": 1576756304,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000394&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-11-01",
                            "epochDate": 1572609919,
                            "type": "8-K",
                            "title": "Disclosing Other Events, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000342&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-10-29",
                            "epochDate": 1572346487,
                            "type": "10-K",
                            "title": "Annual Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000339&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-09-26",
                            "epochDate": 1569495272,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000274&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-09-24",
                            "epochDate": 1569356553,
                            "type": "8-K",
                            "title": "Disclosing Change in Directors or Principal Officers, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000272&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-07-18",
                            "epochDate": 1563482217,
                            "type": "8-K",
                            "title": "Disclosing Other Events",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000245&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-07-11",
                            "epochDate": 1562876373,
                            "type": "8-K",
                            "title": "Disclosing Change in Directors or Principal Officers, Financial Statements and Exhibits",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000236&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-07-01",
                            "epochDate": 1561983038,
                            "type": "8-K",
                            "title": "Disclosing Other Events",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000219&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-06-27",
                            "epochDate": 1561666808,
                            "type": "10-Q",
                            "title": "Quarterly Report",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000217&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-06-27",
                            "epochDate": 1561632944,
                            "type": "8-K",
                            "title": "Disclosing Results of Operations and Financial Condition",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000215&nav=1&src=Yahoo",
                            "maxAge": 1
                        },
                        {
                            "date": "2019-06-03",
                            "epochDate": 1559593563,
                            "type": "8-K",
                            "title": "Disclosing Other Events",
                            "edgarUrl": "https://yahoo.brand.edgar-online.com/DisplayFiling.aspx?TabIndex=2&dcn=0001467373-19-000201&nav=1&src=Yahoo",
                            "maxAge": 1
                        }
                    ],
                    "maxAge": 86400
                },
                "quoteType": {
                    "exchange": "NYQ",
                    "shortName": "Accenture plc",
                    "longName": "Accenture plc",
                    "exchangeTimezoneName": "America/New_York",
                    "exchangeTimezoneShortName": "EDT",
                    "isEsgPopulated": false,
                    "gmtOffSetMilliseconds": "-14400000",
                    "quoteType": "EQUITY",
                    "symbol": "ACN",
                    "messageBoardId": "finmb_972190",
                    "market": "us_market"
                },
                "calendarEvents": {
                    "maxAge": 1,
                    "earnings": {
                        "earningsDate": [
                            {
                                "raw": 1624492800,
                                "fmt": "2021-06-24"
                            }
                        ],
                        "earningsAverage": {
                            "raw": 2.24,
                            "fmt": "2.24"
                        },
                        "earningsLow": {
                            "raw": 2.13,
                            "fmt": "2.13"
                        },
                        "earningsHigh": {
                            "raw": 2.32,
                            "fmt": "2.32"
                        },
                        "revenueAverage": {
                            "raw": 12759600000,
                            "fmt": "12.76B",
                            "longFmt": "12,759,600,000"
                        },
                        "revenueLow": {
                            "raw": 12164000000,
                            "fmt": "12.16B",
                            "longFmt": "12,164,000,000"
                        },
                        "revenueHigh": {
                            "raw": 12939600000,
                            "fmt": "12.94B",
                            "longFmt": "12,939,600,000"
                        }
                    },
                    "exDividendDate": {
                        "raw": 1618358400,
                        "fmt": "2021-04-14"
                    },
                    "dividendDate": {
                        "raw": 1620950400,
                        "fmt": "2021-05-14"
                    }
                },
                "summaryDetail": {
                    "previousClose": {
                        "raw": 287.71,
                        "fmt": "287.71"
                    },
                    "regularMarketOpen": {
                        "raw": 285.97,
                        "fmt": "285.97"
                    },
                    "twoHundredDayAverage": {
                        "raw": 249.31367,
                        "fmt": "249.31"
                    },
                    "trailingAnnualDividendYield": {
                        "raw": 0.011956484,
                        "fmt": "1.20%"
                    },
                    "payoutRatio": {
                        "raw": 0.39810002,
                        "fmt": "39.81%"
                    },
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 287,
                        "fmt": "287.00"
                    },
                    "navPrice": {},
                    "averageDailyVolume10Day": {
                        "raw": 2108520,
                        "fmt": "2.11M",
                        "longFmt": "2,108,520"
                    },
                    "totalAssets": {},
                    "regularMarketPreviousClose": {
                        "raw": 287.71,
                        "fmt": "287.71"
                    },
                    "fiftyDayAverage": {
                        "raw": 265.76736,
                        "fmt": "265.77"
                    },
                    "trailingAnnualDividendRate": {
                        "raw": 3.44,
                        "fmt": "3.44"
                    },
                    "open": {
                        "raw": 285.97,
                        "fmt": "285.97"
                    },
                    "toCurrency": null,
                    "averageVolume10days": {
                        "raw": 2108520,
                        "fmt": "2.11M",
                        "longFmt": "2,108,520"
                    },
                    "expireDate": {},
                    "yield": {},
                    "algorithm": null,
                    "dividendRate": {
                        "raw": 3.52,
                        "fmt": "3.52"
                    },
                    "exDividendDate": {
                        "raw": 1618358400,
                        "fmt": "2021-04-14"
                    },
                    "beta": {
                        "raw": 1.100386,
                        "fmt": "1.10"
                    },
                    "circulatingSupply": {},
                    "startDate": {},
                    "regularMarketDayLow": {
                        "raw": 285.2,
                        "fmt": "285.20"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "trailingPE": {
                        "raw": 33.923077,
                        "fmt": "33.92"
                    },
                    "regularMarketVolume": {
                        "raw": 386687,
                        "fmt": "386.69k",
                        "longFmt": "386,687"
                    },
                    "lastMarket": null,
                    "maxSupply": {},
                    "openInterest": {},
                    "marketCap": {
                        "raw": 182208200704,
                        "fmt": "182.21B",
                        "longFmt": "182,208,200,704"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "averageVolume": {
                        "raw": 2142939,
                        "fmt": "2.14M",
                        "longFmt": "2,142,939"
                    },
                    "priceToSalesTrailing12Months": {
                        "raw": 3.989068,
                        "fmt": "3.99"
                    },
                    "dayLow": {
                        "raw": 285.2,
                        "fmt": "285.20"
                    },
                    "ask": {
                        "raw": 286.37,
                        "fmt": "286.37"
                    },
                    "ytdReturn": {},
                    "askSize": {
                        "raw": 1100,
                        "fmt": "1.1k",
                        "longFmt": "1,100"
                    },
                    "volume": {
                        "raw": 386687,
                        "fmt": "386.69k",
                        "longFmt": "386,687"
                    },
                    "fiftyTwoWeekHigh": {
                        "raw": 287.82,
                        "fmt": "287.82"
                    },
                    "forwardPE": {
                        "raw": 30.5597,
                        "fmt": "30.56"
                    },
                    "maxAge": 1,
                    "fromCurrency": null,
                    "fiveYearAvgDividendYield": {
                        "raw": 1.64,
                        "fmt": "1.64"
                    },
                    "fiftyTwoWeekLow": {
                        "raw": 165.71,
                        "fmt": "165.71"
                    },
                    "bid": {
                        "raw": 286.33,
                        "fmt": "286.33"
                    },
                    "tradeable": false,
                    "dividendYield": {
                        "raw": 0.012200001,
                        "fmt": "1.22%"
                    },
                    "bidSize": {
                        "raw": 1400,
                        "fmt": "1.4k",
                        "longFmt": "1,400"
                    },
                    "dayHigh": {
                        "raw": 287,
                        "fmt": "287.00"
                    }
                },
                "symbol": "ACN",
                "assetProfile": {
                    "zip": "2",
                    "sector": "Technology",
                    "fullTimeEmployees": 537000,
                    "compensationRisk": 4,
                    "auditRisk": 1,
                    "longBusinessSummary": "Accenture plc, a professional services company, provides strategy and consulting, interactive, and technology and operations services worldwide. The company also provides outsourcing services. It serves communications, media, high tech, software, and platform companies; banking, capital market, and insurance industries; and consumer goods, retail, travel services, industrial, and life science industries, as well as clients in health, public service, chemicals and natural resources, energy, and utilities sectors. Accenture plc has alliance relationships with Adobe, Alibaba, Amazon Web Services, Blue Yonder, Cisco, Dell, Google, HPE, IBM RedHat, Microsoft, Oracle, Pegasystems, Salesforce, SAP, ServiceNow, VMWare, Workday, Massachusetts Institute of Technology, Institut Polytechnique de Paris, CNH Industrial, and Reactive Technologies. The company was incorporated in 2009 and is based in Dublin, Ireland.",
                    "city": "Dublin",
                    "phone": "353 1 646 2000",
                    "shareHolderRightsRisk": 3,
                    "compensationAsOfEpochDate": 1609372800,
                    "governanceEpochDate": 1617235200,
                    "boardRisk": 3,
                    "country": "Ireland",
                    "companyOfficers": [
                        {
                            "totalPay": {
                                "raw": 2962564,
                                "fmt": "2.96M",
                                "longFmt": "2,962,564"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1961,
                            "name": "Mr. David P. Rowland",
                            "title": "Exec. Chairman & Advisor to CEO",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 59
                        },
                        {
                            "totalPay": {
                                "raw": 5395299,
                                "fmt": "5.4M",
                                "longFmt": "5,395,299"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1967,
                            "name": "Ms. Julie T. Spellman Sweet",
                            "title": "CEO & Director",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 53
                        },
                        {
                            "totalPay": {
                                "raw": 2468497,
                                "fmt": "2.47M",
                                "longFmt": "2,468,497"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1965,
                            "name": "Ms. Kathleen R. McClure",
                            "title": "Chief Financial Officer",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 55
                        },
                        {
                            "totalPay": {
                                "raw": 3111738,
                                "fmt": "3.11M",
                                "longFmt": "3,111,738"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1959,
                            "name": "Mr. Gianfranco  Casati",
                            "title": "Chief Exec. Officer of Growth Markets",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 61
                        },
                        {
                            "totalPay": {
                                "raw": 2660710,
                                "fmt": "2.66M",
                                "longFmt": "2,660,710"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1962,
                            "name": "Mr. Jean-Marc  Ollagnier",
                            "title": "Chief Exec. Officer of Europe",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 58
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Johan G. Deblaere",
                            "age": 58,
                            "title": "Chief Operating Officer",
                            "yearBorn": 1962,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Richard P. Clark",
                            "age": 59,
                            "title": "Chief Accounting Officer & Corp. Controller",
                            "yearBorn": 1961,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Paul R. Daugherty",
                            "age": 56,
                            "title": "Group Chief Exec. of Technology & CTO",
                            "yearBorn": 1964,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Angie  Park",
                            "title": "Managing Director & Head of Investor Relations",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Joel F. Unruch",
                            "age": 42,
                            "title": "Gen. Counsel & Corp. Sec.",
                            "yearBorn": 1978,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        }
                    ],
                    "website": "http://www.accenture.com",
                    "maxAge": 86400,
                    "overallRisk": 1,
                    "address1": "1 Grand Canal Square",
                    "fax": "353 1 646 2020",
                    "industry": "Information Technology Services",
                    "address2": "Grand Canal Harbour"
                },
                "pageViews": {
                    "shortTermTrend": "NEUTRAL",
                    "midTermTrend": "UP",
                    "longTermTrend": "UP",
                    "maxAge": 1
                }
            }
        ],
        [
            {
                "tickerSymbol": "BP",
                "fractionalShares": "3.537",
                "averageCost": "21.41"
            },
            {
                "financialsTemplate": {
                    "code": "N",
                    "maxAge": 1
                },
                "price": {
                    "quoteSourceName": "Nasdaq Real Time Price",
                    "regularMarketOpen": {
                        "raw": 24.67,
                        "fmt": "24.67"
                    },
                    "averageDailyVolume3Month": {
                        "raw": 16656157,
                        "fmt": "16.66M",
                        "longFmt": "16,656,157"
                    },
                    "exchange": "NYQ",
                    "regularMarketTime": 1618238946,
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 24.93,
                        "fmt": "24.93"
                    },
                    "shortName": "BP p.l.c.",
                    "averageDailyVolume10Day": {
                        "raw": 18702800,
                        "fmt": "18.7M",
                        "longFmt": "18,702,800"
                    },
                    "longName": "BP p.l.c.",
                    "regularMarketChange": {
                        "raw": 0.3682003,
                        "fmt": "0.37"
                    },
                    "currencySymbol": "$",
                    "regularMarketPreviousClose": {
                        "raw": 24.39,
                        "fmt": "24.39"
                    },
                    "preMarketPrice": {
                        "raw": 24.67,
                        "fmt": "24.67"
                    },
                    "preMarketTime": 1618234199,
                    "exchangeDataDelayedBy": 0,
                    "toCurrency": null,
                    "postMarketChange": {},
                    "postMarketPrice": {},
                    "exchangeName": "NYSE",
                    "preMarketChange": {
                        "raw": 0.280001,
                        "fmt": "0.28"
                    },
                    "circulatingSupply": {},
                    "regularMarketDayLow": {
                        "raw": 24.66,
                        "fmt": "24.66"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "regularMarketPrice": {
                        "raw": 24.7582,
                        "fmt": "24.76"
                    },
                    "regularMarketVolume": {
                        "raw": 6542772,
                        "fmt": "6.54M",
                        "longFmt": "6,542,772.00"
                    },
                    "lastMarket": null,
                    "regularMarketSource": "FREE_REALTIME",
                    "openInterest": {},
                    "marketState": "REGULAR",
                    "underlyingSymbol": null,
                    "marketCap": {
                        "raw": 83678257152,
                        "fmt": "83.68B",
                        "longFmt": "83,678,257,152.00"
                    },
                    "quoteType": "EQUITY",
                    "preMarketChangePercent": {
                        "raw": 0.0114801,
                        "fmt": "1.15%"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "symbol": "BP",
                    "preMarketSource": "FREE_REALTIME",
                    "maxAge": 1,
                    "fromCurrency": null,
                    "regularMarketChangePercent": {
                        "raw": 0.015096364,
                        "fmt": "1.51%"
                    }
                },
                "secFilings": {},
                "quoteType": {
                    "exchange": "NYQ",
                    "shortName": "BP p.l.c.",
                    "longName": "BP p.l.c.",
                    "exchangeTimezoneName": "America/New_York",
                    "exchangeTimezoneShortName": "EDT",
                    "isEsgPopulated": false,
                    "gmtOffSetMilliseconds": "-14400000",
                    "quoteType": "EQUITY",
                    "symbol": "BP",
                    "messageBoardId": "finmb_394466",
                    "market": "us_market"
                },
                "calendarEvents": {
                    "maxAge": 1,
                    "earnings": {
                        "earningsDate": [],
                        "earningsAverage": {
                            "raw": 0.33,
                            "fmt": "0.33"
                        },
                        "earningsLow": {
                            "raw": 0,
                            "fmt": "0.00"
                        },
                        "earningsHigh": {
                            "raw": 0.49,
                            "fmt": "0.49"
                        },
                        "revenueAverage": {
                            "raw": 59711400000,
                            "fmt": "59.71B",
                            "longFmt": "59,711,400,000"
                        },
                        "revenueLow": {
                            "raw": 50143000000,
                            "fmt": "50.14B",
                            "longFmt": "50,143,000,000"
                        },
                        "revenueHigh": {
                            "raw": 66170100000,
                            "fmt": "66.17B",
                            "longFmt": "66,170,100,000"
                        }
                    },
                    "exDividendDate": {
                        "raw": 1613606400,
                        "fmt": "2021-02-18"
                    },
                    "dividendDate": {
                        "raw": 1616716800,
                        "fmt": "2021-03-26"
                    }
                },
                "summaryDetail": {
                    "previousClose": {
                        "raw": 24.39,
                        "fmt": "24.39"
                    },
                    "regularMarketOpen": {
                        "raw": 24.67,
                        "fmt": "24.67"
                    },
                    "twoHundredDayAverage": {
                        "raw": 21.416029,
                        "fmt": "21.42"
                    },
                    "trailingAnnualDividendYield": {
                        "raw": 0.010783109,
                        "fmt": "1.08%"
                    },
                    "payoutRatio": {},
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 24.93,
                        "fmt": "24.93"
                    },
                    "navPrice": {},
                    "averageDailyVolume10Day": {
                        "raw": 18702800,
                        "fmt": "18.7M",
                        "longFmt": "18,702,800"
                    },
                    "totalAssets": {},
                    "regularMarketPreviousClose": {
                        "raw": 24.39,
                        "fmt": "24.39"
                    },
                    "fiftyDayAverage": {
                        "raw": 25.308235,
                        "fmt": "25.31"
                    },
                    "trailingAnnualDividendRate": {
                        "raw": 0.263,
                        "fmt": "0.26"
                    },
                    "open": {
                        "raw": 24.67,
                        "fmt": "24.67"
                    },
                    "toCurrency": null,
                    "averageVolume10days": {
                        "raw": 18702800,
                        "fmt": "18.7M",
                        "longFmt": "18,702,800"
                    },
                    "expireDate": {},
                    "yield": {},
                    "algorithm": null,
                    "dividendRate": {
                        "raw": 1.26,
                        "fmt": "1.26"
                    },
                    "exDividendDate": {
                        "raw": 1613606400,
                        "fmt": "2021-02-18"
                    },
                    "beta": {
                        "raw": 0.787375,
                        "fmt": "0.79"
                    },
                    "circulatingSupply": {},
                    "startDate": {},
                    "regularMarketDayLow": {
                        "raw": 24.66,
                        "fmt": "24.66"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "regularMarketVolume": {
                        "raw": 6542772,
                        "fmt": "6.54M",
                        "longFmt": "6,542,772"
                    },
                    "lastMarket": null,
                    "maxSupply": {},
                    "openInterest": {},
                    "marketCap": {
                        "raw": 83678257152,
                        "fmt": "83.68B",
                        "longFmt": "83,678,257,152"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "averageVolume": {
                        "raw": 16656157,
                        "fmt": "16.66M",
                        "longFmt": "16,656,157"
                    },
                    "priceToSalesTrailing12Months": {
                        "raw": 0.4646366,
                        "fmt": "0.46"
                    },
                    "dayLow": {
                        "raw": 24.66,
                        "fmt": "24.66"
                    },
                    "ask": {
                        "raw": 24.78,
                        "fmt": "24.78"
                    },
                    "ytdReturn": {},
                    "askSize": {
                        "raw": 1200,
                        "fmt": "1.2k",
                        "longFmt": "1,200"
                    },
                    "volume": {
                        "raw": 6542772,
                        "fmt": "6.54M",
                        "longFmt": "6,542,772"
                    },
                    "fiftyTwoWeekHigh": {
                        "raw": 28.57,
                        "fmt": "28.57"
                    },
                    "forwardPE": {
                        "raw": 9.238134,
                        "fmt": "9.24"
                    },
                    "maxAge": 1,
                    "fromCurrency": null,
                    "fiveYearAvgDividendYield": {
                        "raw": 7.13,
                        "fmt": "7.13"
                    },
                    "fiftyTwoWeekLow": {
                        "raw": 14.74,
                        "fmt": "14.74"
                    },
                    "bid": {
                        "raw": 24.77,
                        "fmt": "24.77"
                    },
                    "tradeable": false,
                    "dividendYield": {
                        "raw": 0.0517,
                        "fmt": "5.17%"
                    },
                    "bidSize": {
                        "raw": 3200,
                        "fmt": "3.2k",
                        "longFmt": "3,200"
                    },
                    "dayHigh": {
                        "raw": 24.93,
                        "fmt": "24.93"
                    }
                },
                "symbol": "BP",
                "assetProfile": {
                    "zip": "SW1Y 4PD",
                    "sector": "Energy",
                    "fullTimeEmployees": 63600,
                    "compensationRisk": 7,
                    "auditRisk": 8,
                    "longBusinessSummary": "BP p.l.c. engages in the energy business worldwide. It operates through Gas & Low Carbon Energy, Oil Production & Operations, Customers & Products, and Rosneft segments. It produces and trades in natural gas; offers biofuels; operates onshore and offshore wind power, and solar power generating facilities; and provides de-carbonization solutions and services, such as hydrogen, and carbon capture, usage and storage. The company is also involved in the convenience and mobility business, which manages the sale of fuels to wholesale and retail customers, convenience products, aviation fuels, and Castrol lubricants; and refining, supply, and trading of oil products, as well as operation of electric vehicle charging facilities. In addition, it produces and refines oil and gas; and invests in upstream, downstream, and alternative energy companies, as well as in advanced mobility, bio and low carbon products, carbon management, digital transformation, and power and storage areas. BP p.l.c. was founded in 1908 and is headquartered in London, the United Kingdom.",
                    "city": "London",
                    "phone": "44 20 7496 4000",
                    "shareHolderRightsRisk": 10,
                    "compensationAsOfEpochDate": 1609372800,
                    "governanceEpochDate": 1617235200,
                    "boardRisk": 1,
                    "country": "United Kingdom",
                    "companyOfficers": [
                        {
                            "totalPay": {
                                "raw": 2066720,
                                "fmt": "2.07M",
                                "longFmt": "2,066,720"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1970,
                            "name": "Mr. Bernard  Looney",
                            "title": "Group CEO & Director",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 50
                        },
                        {
                            "totalPay": {
                                "raw": 1036098,
                                "fmt": "1.04M",
                                "longFmt": "1,036,098"
                            },
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "yearBorn": 1970,
                            "name": "Mr. Murray  Auchincloss",
                            "title": "Exec. of Fin., CFO & Director",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 50
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Gordon  Birrell",
                            "age": 57,
                            "title": "Exec. VP of Production & Operations",
                            "yearBorn": 1963,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Craig  Marshall",
                            "title": "Group Head of Investor Relations",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Eric  Nitcher",
                            "age": 57,
                            "title": "Exec. VP of Legal",
                            "yearBorn": 1963,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Rahul  Saxena",
                            "title": "Group Ethics & Compliance Officer",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Geoff  Morrell",
                            "age": 51,
                            "title": "Exec. VP of Communications & Advocacy",
                            "yearBorn": 1969,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Marco  Ryan",
                            "title": "Sr. VP of Digital Customers & Markets",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Ms. Kerry  Dryburgh",
                            "title": "Exec. VP of People & Culture",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Steve  Marshall",
                            "title": "Head of Training Academy and VP",
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        }
                    ],
                    "website": "http://www.bp.com",
                    "maxAge": 86400,
                    "overallRisk": 5,
                    "address1": "1 St James's Square",
                    "fax": "44 20 7496 4630",
                    "industry": "Oil & Gas Integrated"
                },
                "pageViews": {
                    "shortTermTrend": "DOWN",
                    "midTermTrend": "UP",
                    "longTermTrend": "UP",
                    "maxAge": 1
                }
            }
        ],
        [
            {
                "tickerSymbol": "BTI",
                "fractionalShares": "0.305",
                "averageCost": "32.80"
            },
            {
                "financialsTemplate": {
                    "code": "N",
                    "maxAge": 1
                },
                "price": {
                    "quoteSourceName": "Nasdaq Real Time Price",
                    "regularMarketOpen": {
                        "raw": 38.73,
                        "fmt": "38.73"
                    },
                    "averageDailyVolume3Month": {
                        "raw": 2507322,
                        "fmt": "2.51M",
                        "longFmt": "2,507,322"
                    },
                    "exchange": "NYQ",
                    "regularMarketTime": 1618238945,
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 39.085,
                        "fmt": "39.08"
                    },
                    "shortName": "British American Tobacco  Indus",
                    "averageDailyVolume10Day": {
                        "raw": 2347480,
                        "fmt": "2.35M",
                        "longFmt": "2,347,480"
                    },
                    "longName": "British American Tobacco p.l.c.",
                    "regularMarketChange": {
                        "raw": 0.07499695,
                        "fmt": "0.07"
                    },
                    "currencySymbol": "$",
                    "regularMarketPreviousClose": {
                        "raw": 38.9,
                        "fmt": "38.90"
                    },
                    "preMarketPrice": {
                        "raw": 38.73,
                        "fmt": "38.73"
                    },
                    "preMarketTime": 1618234199,
                    "exchangeDataDelayedBy": 0,
                    "toCurrency": null,
                    "postMarketChange": {},
                    "postMarketPrice": {},
                    "exchangeName": "NYSE",
                    "preMarketChange": {
                        "raw": -0.170002,
                        "fmt": "-0.17"
                    },
                    "circulatingSupply": {},
                    "regularMarketDayLow": {
                        "raw": 38.69,
                        "fmt": "38.69"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "regularMarketPrice": {
                        "raw": 38.975,
                        "fmt": "38.97"
                    },
                    "regularMarketVolume": {
                        "raw": 1030656,
                        "fmt": "1.03M",
                        "longFmt": "1,030,656.00"
                    },
                    "lastMarket": null,
                    "regularMarketSource": "FREE_REALTIME",
                    "openInterest": {},
                    "marketState": "REGULAR",
                    "underlyingSymbol": null,
                    "marketCap": {
                        "raw": 87960723456,
                        "fmt": "87.96B",
                        "longFmt": "87,960,723,456.00"
                    },
                    "quoteType": "EQUITY",
                    "preMarketChangePercent": {
                        "raw": -0.0043702303,
                        "fmt": "-0.44%"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "symbol": "BTI",
                    "preMarketSource": "FREE_REALTIME",
                    "maxAge": 1,
                    "fromCurrency": null,
                    "regularMarketChangePercent": {
                        "raw": 0.001927942,
                        "fmt": "0.19%"
                    }
                },
                "secFilings": {},
                "quoteType": {
                    "exchange": "NYQ",
                    "shortName": "British American Tobacco  Indus",
                    "longName": "British American Tobacco p.l.c.",
                    "exchangeTimezoneName": "America/New_York",
                    "exchangeTimezoneShortName": "EDT",
                    "isEsgPopulated": false,
                    "gmtOffSetMilliseconds": "-14400000",
                    "quoteType": "EQUITY",
                    "symbol": "BTI",
                    "messageBoardId": "finmb_326614",
                    "market": "us_market"
                },
                "calendarEvents": {
                    "maxAge": 1,
                    "earnings": {
                        "earningsDate": [],
                        "earningsAverage": {},
                        "earningsLow": {},
                        "earningsHigh": {},
                        "revenueAverage": {},
                        "revenueLow": {},
                        "revenueHigh": {}
                    },
                    "exDividendDate": {
                        "raw": 1625702400,
                        "fmt": "2021-07-08"
                    },
                    "dividendDate": {
                        "raw": 1644796800,
                        "fmt": "2022-02-14"
                    }
                },
                "summaryDetail": {
                    "previousClose": {
                        "raw": 38.9,
                        "fmt": "38.90"
                    },
                    "regularMarketOpen": {
                        "raw": 38.73,
                        "fmt": "38.73"
                    },
                    "twoHundredDayAverage": {
                        "raw": 36.773308,
                        "fmt": "36.77"
                    },
                    "trailingAnnualDividendYield": {
                        "raw": 0.054087404,
                        "fmt": "5.41%"
                    },
                    "payoutRatio": {
                        "raw": 0.7556,
                        "fmt": "75.56%"
                    },
                    "volume24Hr": {},
                    "regularMarketDayHigh": {
                        "raw": 39.085,
                        "fmt": "39.08"
                    },
                    "navPrice": {},
                    "averageDailyVolume10Day": {
                        "raw": 2347480,
                        "fmt": "2.35M",
                        "longFmt": "2,347,480"
                    },
                    "totalAssets": {},
                    "regularMarketPreviousClose": {
                        "raw": 38.9,
                        "fmt": "38.90"
                    },
                    "fiftyDayAverage": {
                        "raw": 37.86441,
                        "fmt": "37.86"
                    },
                    "trailingAnnualDividendRate": {
                        "raw": 2.104,
                        "fmt": "2.10"
                    },
                    "open": {
                        "raw": 38.73,
                        "fmt": "38.73"
                    },
                    "toCurrency": null,
                    "averageVolume10days": {
                        "raw": 2347480,
                        "fmt": "2.35M",
                        "longFmt": "2,347,480"
                    },
                    "expireDate": {},
                    "yield": {},
                    "algorithm": null,
                    "dividendRate": {
                        "raw": 2.98,
                        "fmt": "2.98"
                    },
                    "exDividendDate": {
                        "raw": 1625702400,
                        "fmt": "2021-07-08"
                    },
                    "beta": {
                        "raw": 0.654485,
                        "fmt": "0.65"
                    },
                    "circulatingSupply": {},
                    "startDate": {},
                    "regularMarketDayLow": {
                        "raw": 38.69,
                        "fmt": "38.69"
                    },
                    "priceHint": {
                        "raw": 2,
                        "fmt": "2",
                        "longFmt": "2"
                    },
                    "currency": "USD",
                    "trailingPE": {
                        "raw": 10.19754,
                        "fmt": "10.20"
                    },
                    "regularMarketVolume": {
                        "raw": 1030656,
                        "fmt": "1.03M",
                        "longFmt": "1,030,656"
                    },
                    "lastMarket": null,
                    "maxSupply": {},
                    "openInterest": {},
                    "marketCap": {
                        "raw": 87960723456,
                        "fmt": "87.96B",
                        "longFmt": "87,960,723,456"
                    },
                    "volumeAllCurrencies": {},
                    "strikePrice": {},
                    "averageVolume": {
                        "raw": 2507322,
                        "fmt": "2.51M",
                        "longFmt": "2,507,322"
                    },
                    "priceToSalesTrailing12Months": {
                        "raw": 3.4125047,
                        "fmt": "3.41"
                    },
                    "dayLow": {
                        "raw": 38.69,
                        "fmt": "38.69"
                    },
                    "ask": {
                        "raw": 39.03,
                        "fmt": "39.03"
                    },
                    "ytdReturn": {},
                    "askSize": {
                        "raw": 1300,
                        "fmt": "1.3k",
                        "longFmt": "1,300"
                    },
                    "volume": {
                        "raw": 1030656,
                        "fmt": "1.03M",
                        "longFmt": "1,030,656"
                    },
                    "fiftyTwoWeekHigh": {
                        "raw": 41.58,
                        "fmt": "41.58"
                    },
                    "forwardPE": {
                        "raw": 9.81738,
                        "fmt": "9.82"
                    },
                    "maxAge": 1,
                    "fromCurrency": null,
                    "fiveYearAvgDividendYield": {
                        "raw": 5.3,
                        "fmt": "5.30"
                    },
                    "fiftyTwoWeekLow": {
                        "raw": 31.6,
                        "fmt": "31.60"
                    },
                    "bid": {
                        "raw": 39.02,
                        "fmt": "39.02"
                    },
                    "tradeable": false,
                    "dividendYield": {
                        "raw": 0.0767,
                        "fmt": "7.67%"
                    },
                    "bidSize": {
                        "raw": 800,
                        "fmt": "800",
                        "longFmt": "800"
                    },
                    "dayHigh": {
                        "raw": 39.085,
                        "fmt": "39.08"
                    }
                },
                "symbol": "BTI",
                "assetProfile": {
                    "zip": "WC2R 2PG",
                    "sector": "Consumer Defensive",
                    "compensationRisk": 10,
                    "auditRisk": 2,
                    "longBusinessSummary": "British American Tobacco p.l.c. provides tobacco and nicotine products to consumers worldwide. It offers vapour products, tobacco heating products, and modern oral products; combustible products; and traditional oral products, such as Swedish-style snus and American moist snuff. The company distributes its products to retail outlets. British American Tobacco p.l.c. was founded in 1902 and is based in London, the United Kingdom.",
                    "city": "London",
                    "phone": "44 20 7845 1000",
                    "shareHolderRightsRisk": 1,
                    "compensationAsOfEpochDate": 1609372800,
                    "governanceEpochDate": 1617235200,
                    "boardRisk": 5,
                    "country": "United Kingdom",
                    "companyOfficers": [
                        {
                            "totalPay": {
                                "raw": 5867110,
                                "fmt": "5.87M",
                                "longFmt": "5,867,110"
                            },
                            "exercisedValue": {
                                "raw": 750870,
                                "fmt": "750.87k",
                                "longFmt": "750,870"
                            },
                            "yearBorn": 1964,
                            "name": "Mr. Jack Marie Henry David Bowles",
                            "title": "CEO, Member of Management Board & Director",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 56
                        },
                        {
                            "totalPay": {
                                "raw": 2887643,
                                "fmt": "2.89M",
                                "longFmt": "2,887,643"
                            },
                            "exercisedValue": {
                                "raw": 631525,
                                "fmt": "631.52k",
                                "longFmt": "631,525"
                            },
                            "yearBorn": 1966,
                            "name": "Mr. Tadeu Luiz Marroco",
                            "title": "Fin. & Transformation Director, Member of Management Board and Exec. Director",
                            "maxAge": 1,
                            "fiscalYear": 2020,
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "age": 54
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Kingsley  Wheaton",
                            "age": 47,
                            "title": "Chief Marketing Officer & Member of Management Board",
                            "yearBorn": 1973,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Johan  Vandermeulen",
                            "age": 52,
                            "title": "Regional Director of Europe & North Africa and Member of Management Board",
                            "yearBorn": 1968,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Dr. David  O'Reilly",
                            "age": 54,
                            "title": "Director of Research & Science and Member of Management Board",
                            "yearBorn": 1966,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Jerome B. Abelman",
                            "age": 56,
                            "title": "Director of Legal & External Affairs, Gen. Counsel and Member of Management Board",
                            "yearBorn": 1964,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Luciano  Comin",
                            "age": 50,
                            "title": "Regional Director for Americas & Sub-Saharan Africa and Member of Management Board",
                            "yearBorn": 1970,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Paul  Lageweg",
                            "age": 50,
                            "title": "Director of New Categories & Member of Management Board",
                            "yearBorn": 1970,
                            "fiscalYear": 2020,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 1027440,
                                "fmt": "1.03M",
                                "longFmt": "1,027,440"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Ms. Marina  Bellini",
                            "age": 46,
                            "title": "Director of Digital & Information and Member of Management Board",
                            "yearBorn": 1974,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        },
                        {
                            "maxAge": 1,
                            "name": "Mr. Guy  Meldrum",
                            "age": 48,
                            "title": "Member of Management Board",
                            "yearBorn": 1972,
                            "exercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            },
                            "unexercisedValue": {
                                "raw": 0,
                                "fmt": null,
                                "longFmt": "0"
                            }
                        }
                    ],
                    "website": "http://www.bat.com",
                    "maxAge": 86400,
                    "overallRisk": 8,
                    "address1": "Globe House",
                    "fax": "44 20 7845 2118",
                    "industry": "Tobacco",
                    "address2": "4 Temple Place"
                },
                "pageViews": {
                    "shortTermTrend": "UP",
                    "midTermTrend": "UP",
                    "longTermTrend": "UP",
                    "maxAge": 1
                }
            }
        ]
    ];

    /*

    // get saved user data
    var userData = this.getUserData();
    this.savedUserData = userData;
    //this.savedUserData = JSON.parse(this.savedUserData);

    console.log('saved user data');console.log(this.savedUserData);

    // iterate
    if(this.savedUserData) {
        this.savedUserData.forEach(element => {

            this.data$ = this.defaultService.getData(element.tickerSymbol)
              .subscribe(data => {
                this.config = <DefaultData>data;
                
                // strinigfy data to be combined
                var eD = JSON.stringify(this.config);
                var uD = JSON.stringify(element);
      
                //console.log(eD);
                //console.log(uD);
      
                // combine
                var fullData = `[${uD}, ${eD}]`;
      
                // push to displayData
                this.displayData.push(JSON.parse(fullData));
              },
              error => this.error = error);
        });
    }
    

    // sort
    /*
    this.displayData.sort(function(a,b){
      console.log('sort these');
      a[0].tickerSymbol.localeCompare(b[0].tickerSymbol.rendered);
    });
    */
    
    // this.displayData.sort((a,b) => a[0].tickerSymbol.localeCompare(b[0].tickerSymbol.rendered));
    
    // this.compareStrings("ACN", "AAPL");
    console.log(this.displayData);

    // set current data to local storage so we don't have to constantly call api for display or calculations
    localStorage.setItem('wwfSavedData', JSON.stringify(this.displayData));

  }

  compareStrings(a: string,b: string) {
    a = a.toLowerCase();
    b = b.toLowerCase();
  
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

  getUserData() {
    var userStockData = JSON.parse(localStorage.getItem('wwfUserData'));

    return userStockData;
  }

  deleteStock(stock) {
      this.deleteStockService.deleteFromPortfolio(stock);
      
  }

  /**
   * Check the date and time of the last updated wwfStockData and compare.
   * If there are no new stocks being added or removed, or the last wwfUpdateTime 
   * is under 24 hours, keep wwfStockData the same. Otherwise, update from
   * api.
   * @param stockDataChanged
   */
  checkLastDataUpdate(stockDataChanged: boolean) {

    var lastUpdateTimestamp = localStorage.getItem('wwfUpdateDate');

    // check if any stockData has changed
    if (!stockDataChanged ) return

    // compare last update date to current time

    console.log(localStorage.getItem('wwfStockData'));

    // fetch the data from the API
    this.fetchData();
  }

  ngOnInit(): void {
      
    
    // localStorage.setItem('wwfStockData', JSON.stringify([{
    //     tickerSymbol: "AAPL",
    //     fractionalShares: 0.167,
    //     averageCost: 136.36
    //   }, {
    //     tickerSymbol: "ABBV",
    //     fractionalShares: 0.300,
    //     averageCost: 99.33
    //   }, {
    //     tickerSymbol: "ACN",
    //     fractionalShares: 0.150,
    //     averageCost: 255.00
    //   }
    // ]));
    

    //localStorage.clear();
    // this.inputItem = localStorage.wwfStockData;

    // set wwfUpdateDate if none exists
    let updateDate = localStorage.getItem('wwfUpdateDate');

    if(!updateDate) {
        localStorage.setItem('wwfUpdateDate', new Date().getTime().toString());
    }
  }

}
