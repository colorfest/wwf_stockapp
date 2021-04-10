import { Component, OnInit } from '@angular/core';

import { DefaultService } from '../../services/default.service';
import { DefaultData } from '../../models/defaultData';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data$;
  config: DefaultData;
  error: any;
  inputItem: any;
  savedUserData: any;
  displayData: any;

  constructor(private defaultService: DefaultService) { }

  fetchData() {
    // for testing, delete when done
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
                      "raw": 106.39,
                      "fmt": "106.39"
                  },
                  "averageDailyVolume3Month": {
                      "raw": 7466762,
                      "fmt": "7.47M",
                      "longFmt": "7,466,762"
                  },
                  "exchange": "NYQ",
                  "regularMarketTime": 1617998548,
                  "volume24Hr": {},
                  "regularMarketDayHigh": {
                      "raw": 107.72,
                      "fmt": "107.72"
                  },
                  "shortName": "AbbVie Inc.",
                  "averageDailyVolume10Day": {
                      "raw": 7502757,
                      "fmt": "7.5M",
                      "longFmt": "7,502,757"
                  },
                  "longName": "AbbVie Inc.",
                  "regularMarketChange": {
                      "raw": 1.44,
                      "fmt": "1.44"
                  },
                  "currencySymbol": "$",
                  "regularMarketPreviousClose": {
                      "raw": 106.1,
                      "fmt": "106.10"
                  },
                  "postMarketTime": 1618006177,
                  "preMarketPrice": {
                      "raw": 106.45,
                      "fmt": "106.45"
                  },
                  "preMarketTime": 1617974999,
                  "exchangeDataDelayedBy": 0,
                  "toCurrency": null,
                  "postMarketChange": {
                      "raw": 0.110001,
                      "fmt": "0.11"
                  },
                  "postMarketPrice": {
                      "raw": 107.65,
                      "fmt": "107.65"
                  },
                  "exchangeName": "NYSE",
                  "preMarketChange": {
                      "raw": 0.349998,
                      "fmt": "0.35"
                  },
                  "circulatingSupply": {},
                  "regularMarketDayLow": {
                      "raw": 106.05,
                      "fmt": "106.05"
                  },
                  "priceHint": {
                      "raw": 2,
                      "fmt": "2",
                      "longFmt": "2"
                  },
                  "currency": "USD",
                  "regularMarketPrice": {
                      "raw": 107.54,
                      "fmt": "107.54"
                  },
                  "regularMarketVolume": {
                      "raw": 4540626,
                      "fmt": "4.54M",
                      "longFmt": "4,540,626.00"
                  },
                  "lastMarket": null,
                  "regularMarketSource": "FREE_REALTIME",
                  "openInterest": {},
                  "marketState": "POST",
                  "underlyingSymbol": null,
                  "marketCap": {
                      "raw": 189789814784,
                      "fmt": "189.79B",
                      "longFmt": "189,789,814,784.00"
                  },
                  "quoteType": "EQUITY",
                  "preMarketChangePercent": {
                      "raw": 0.0032987602,
                      "fmt": "0.33%"
                  },
                  "volumeAllCurrencies": {},
                  "postMarketSource": "FREE_REALTIME",
                  "strikePrice": {},
                  "symbol": "ABBV",
                  "postMarketChangePercent": {
                      "raw": 0.00102288,
                      "fmt": "0.10%"
                  },
                  "preMarketSource": "FREE_REALTIME",
                  "maxAge": 1,
                  "fromCurrency": null,
                  "regularMarketChangePercent": {
                      "raw": 0.013572101,
                      "fmt": "1.36%"
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
                          "raw": 2.84,
                          "fmt": "2.84"
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
                          "raw": 12796600000,
                          "fmt": "12.8B",
                          "longFmt": "12,796,600,000"
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
                      "raw": 106.1,
                      "fmt": "106.10"
                  },
                  "regularMarketOpen": {
                      "raw": 106.39,
                      "fmt": "106.39"
                  },
                  "twoHundredDayAverage": {
                      "raw": 100.76116,
                      "fmt": "100.76"
                  },
                  "trailingAnnualDividendYield": {
                      "raw": 0.045617346,
                      "fmt": "4.56%"
                  },
                  "payoutRatio": {
                      "raw": 1.7353,
                      "fmt": "173.53%"
                  },
                  "volume24Hr": {},
                  "regularMarketDayHigh": {
                      "raw": 107.72,
                      "fmt": "107.72"
                  },
                  "navPrice": {},
                  "averageDailyVolume10Day": {
                      "raw": 7502757,
                      "fmt": "7.5M",
                      "longFmt": "7,502,757"
                  },
                  "totalAssets": {},
                  "regularMarketPreviousClose": {
                      "raw": 106.1,
                      "fmt": "106.10"
                  },
                  "fiftyDayAverage": {
                      "raw": 106.58714,
                      "fmt": "106.59"
                  },
                  "trailingAnnualDividendRate": {
                      "raw": 4.84,
                      "fmt": "4.84"
                  },
                  "open": {
                      "raw": 106.39,
                      "fmt": "106.39"
                  },
                  "toCurrency": null,
                  "averageVolume10days": {
                      "raw": 7502757,
                      "fmt": "7.5M",
                      "longFmt": "7,502,757"
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
                      "raw": 106.05,
                      "fmt": "106.05"
                  },
                  "priceHint": {
                      "raw": 2,
                      "fmt": "2",
                      "longFmt": "2"
                  },
                  "currency": "USD",
                  "trailingPE": {
                      "raw": 39.536766,
                      "fmt": "39.54"
                  },
                  "regularMarketVolume": {
                      "raw": 4540626,
                      "fmt": "4.54M",
                      "longFmt": "4,540,626"
                  },
                  "lastMarket": null,
                  "maxSupply": {},
                  "openInterest": {},
                  "marketCap": {
                      "raw": 189789814784,
                      "fmt": "189.79B",
                      "longFmt": "189,789,814,784"
                  },
                  "volumeAllCurrencies": {},
                  "strikePrice": {},
                  "averageVolume": {
                      "raw": 7466762,
                      "fmt": "7.47M",
                      "longFmt": "7,466,762"
                  },
                  "priceToSalesTrailing12Months": {
                      "raw": 4.143521,
                      "fmt": "4.14"
                  },
                  "dayLow": {
                      "raw": 106.05,
                      "fmt": "106.05"
                  },
                  "ask": {
                      "raw": 107.5,
                      "fmt": "107.50"
                  },
                  "ytdReturn": {},
                  "askSize": {
                      "raw": 800,
                      "fmt": "800",
                      "longFmt": "800"
                  },
                  "volume": {
                      "raw": 4540626,
                      "fmt": "4.54M",
                      "longFmt": "4,540,626"
                  },
                  "fiftyTwoWeekHigh": {
                      "raw": 113.41,
                      "fmt": "113.41"
                  },
                  "forwardPE": {
                      "raw": 7.7927537,
                      "fmt": "7.79"
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
                      "raw": 107.63,
                      "fmt": "107.63"
                  },
                  "tradeable": false,
                  "dividendYield": {
                      "raw": 0.049000002,
                      "fmt": "4.90%"
                  },
                  "bidSize": {
                      "raw": 1300,
                      "fmt": "1.3k",
                      "longFmt": "1,300"
                  },
                  "dayHigh": {
                      "raw": 107.72,
                      "fmt": "107.72"
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
                  "shortTermTrend": "NEUTRAL",
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
                      "raw": 285,
                      "fmt": "285.00"
                  },
                  "averageDailyVolume3Month": {
                      "raw": 2142239,
                      "fmt": "2.14M",
                      "longFmt": "2,142,239"
                  },
                  "exchange": "NYQ",
                  "regularMarketTime": 1617998402,
                  "volume24Hr": {},
                  "regularMarketDayHigh": {
                      "raw": 287.83,
                      "fmt": "287.83"
                  },
                  "shortName": "Accenture plc",
                  "averageDailyVolume10Day": {
                      "raw": 2170800,
                      "fmt": "2.17M",
                      "longFmt": "2,170,800"
                  },
                  "longName": "Accenture plc",
                  "regularMarketChange": {
                      "raw": 3.28998,
                      "fmt": "3.29"
                  },
                  "currencySymbol": "$",
                  "regularMarketPreviousClose": {
                      "raw": 284.42,
                      "fmt": "284.42"
                  },
                  "postMarketTime": 1618003493,
                  "preMarketPrice": {
                      "raw": 283.51,
                      "fmt": "283.51"
                  },
                  "preMarketTime": 1617973874,
                  "exchangeDataDelayedBy": 0,
                  "toCurrency": null,
                  "postMarketChange": {
                      "raw": 0,
                      "fmt": "0.00"
                  },
                  "postMarketPrice": {
                      "raw": 287.71,
                      "fmt": "287.71"
                  },
                  "exchangeName": "NYSE",
                  "preMarketChange": {
                      "raw": -0.910004,
                      "fmt": "-0.91"
                  },
                  "circulatingSupply": {},
                  "regularMarketDayLow": {
                      "raw": 284.21,
                      "fmt": "284.21"
                  },
                  "priceHint": {
                      "raw": 2,
                      "fmt": "2",
                      "longFmt": "2"
                  },
                  "currency": "USD",
                  "regularMarketPrice": {
                      "raw": 287.71,
                      "fmt": "287.71"
                  },
                  "regularMarketVolume": {
                      "raw": 1760688,
                      "fmt": "1.76M",
                      "longFmt": "1,760,688.00"
                  },
                  "lastMarket": null,
                  "regularMarketSource": "FREE_REALTIME",
                  "openInterest": {},
                  "marketState": "POST",
                  "underlyingSymbol": null,
                  "marketCap": {
                      "raw": 182881992704,
                      "fmt": "182.88B",
                      "longFmt": "182,881,992,704.00"
                  },
                  "quoteType": "EQUITY",
                  "preMarketChangePercent": {
                      "raw": -0.00319951,
                      "fmt": "-0.32%"
                  },
                  "volumeAllCurrencies": {},
                  "postMarketSource": "FREE_REALTIME",
                  "strikePrice": {},
                  "symbol": "ACN",
                  "postMarketChangePercent": {
                      "raw": 0,
                      "fmt": "0.00%"
                  },
                  "preMarketSource": "FREE_REALTIME",
                  "maxAge": 1,
                  "fromCurrency": null,
                  "regularMarketChangePercent": {
                      "raw": 0.0115673,
                      "fmt": "1.16%"
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
                      "raw": 284.42,
                      "fmt": "284.42"
                  },
                  "regularMarketOpen": {
                      "raw": 285,
                      "fmt": "285.00"
                  },
                  "twoHundredDayAverage": {
                      "raw": 248.69876,
                      "fmt": "248.70"
                  },
                  "trailingAnnualDividendYield": {
                      "raw": 0.012094789,
                      "fmt": "1.21%"
                  },
                  "payoutRatio": {
                      "raw": 0.39810002,
                      "fmt": "39.81%"
                  },
                  "volume24Hr": {},
                  "regularMarketDayHigh": {
                      "raw": 287.83,
                      "fmt": "287.83"
                  },
                  "navPrice": {},
                  "averageDailyVolume10Day": {
                      "raw": 2170800,
                      "fmt": "2.17M",
                      "longFmt": "2,170,800"
                  },
                  "totalAssets": {},
                  "regularMarketPreviousClose": {
                      "raw": 284.42,
                      "fmt": "284.42"
                  },
                  "fiftyDayAverage": {
                      "raw": 264.58,
                      "fmt": "264.58"
                  },
                  "trailingAnnualDividendRate": {
                      "raw": 3.44,
                      "fmt": "3.44"
                  },
                  "open": {
                      "raw": 285,
                      "fmt": "285.00"
                  },
                  "toCurrency": null,
                  "averageVolume10days": {
                      "raw": 2170800,
                      "fmt": "2.17M",
                      "longFmt": "2,170,800"
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
                      "raw": 284.21,
                      "fmt": "284.21"
                  },
                  "priceHint": {
                      "raw": 2,
                      "fmt": "2",
                      "longFmt": "2"
                  },
                  "currency": "USD",
                  "trailingPE": {
                      "raw": 34.04852,
                      "fmt": "34.05"
                  },
                  "regularMarketVolume": {
                      "raw": 1760688,
                      "fmt": "1.76M",
                      "longFmt": "1,760,688"
                  },
                  "lastMarket": null,
                  "maxSupply": {},
                  "openInterest": {},
                  "marketCap": {
                      "raw": 182881992704,
                      "fmt": "182.88B",
                      "longFmt": "182,881,992,704"
                  },
                  "volumeAllCurrencies": {},
                  "strikePrice": {},
                  "averageVolume": {
                      "raw": 2142239,
                      "fmt": "2.14M",
                      "longFmt": "2,142,239"
                  },
                  "priceToSalesTrailing12Months": {
                      "raw": 4.0038195,
                      "fmt": "4.00"
                  },
                  "dayLow": {
                      "raw": 284.21,
                      "fmt": "284.21"
                  },
                  "ask": {
                      "raw": 287.75,
                      "fmt": "287.75"
                  },
                  "ytdReturn": {},
                  "askSize": {
                      "raw": 1100,
                      "fmt": "1.1k",
                      "longFmt": "1,100"
                  },
                  "volume": {
                      "raw": 1760688,
                      "fmt": "1.76M",
                      "longFmt": "1,760,688"
                  },
                  "fiftyTwoWeekHigh": {
                      "raw": 287.83,
                      "fmt": "287.83"
                  },
                  "forwardPE": {
                      "raw": 30.672707,
                      "fmt": "30.67"
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
                      "raw": 286.77,
                      "fmt": "286.77"
                  },
                  "tradeable": false,
                  "dividendYield": {
                      "raw": 0.0124,
                      "fmt": "1.24%"
                  },
                  "bidSize": {
                      "raw": 800,
                      "fmt": "800",
                      "longFmt": "800"
                  },
                  "dayHigh": {
                      "raw": 287.83,
                      "fmt": "287.83"
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
                  "quoteSourceName": "Delayed Quote",
                  "regularMarketOpen": {
                      "raw": 129.8,
                      "fmt": "129.80"
                  },
                  "averageDailyVolume3Month": {
                      "raw": 106951765,
                      "fmt": "106.95M",
                      "longFmt": "106,951,765"
                  },
                  "exchange": "NMS",
                  "regularMarketTime": 1617998402,
                  "volume24Hr": {},
                  "regularMarketDayHigh": {
                      "raw": 133,
                      "fmt": "133.00"
                  },
                  "shortName": "Apple Inc.",
                  "averageDailyVolume10Day": {
                      "raw": 88554128,
                      "fmt": "88.55M",
                      "longFmt": "88,554,128"
                  },
                  "longName": "Apple Inc.",
                  "regularMarketChange": {
                      "raw": 2.6349945,
                      "fmt": "2.63"
                  },
                  "currencySymbol": "$",
                  "regularMarketPreviousClose": {
                      "raw": 130.36,
                      "fmt": "130.36"
                  },
                  "postMarketTime": 1618006214,
                  "preMarketPrice": {
                      "raw": 129.91,
                      "fmt": "129.91"
                  },
                  "preMarketTime": 1617974999,
                  "exchangeDataDelayedBy": 0,
                  "toCurrency": null,
                  "postMarketChange": {
                      "raw": -0.034988403,
                      "fmt": "-0.03"
                  },
                  "postMarketPrice": {
                      "raw": 132.96,
                      "fmt": "132.96"
                  },
                  "exchangeName": "NasdaqGS",
                  "preMarketChange": {
                      "raw": -0.449997,
                      "fmt": "-0.45"
                  },
                  "circulatingSupply": {},
                  "regularMarketDayLow": {
                      "raw": 129.47,
                      "fmt": "129.47"
                  },
                  "priceHint": {
                      "raw": 2,
                      "fmt": "2",
                      "longFmt": "2"
                  },
                  "currency": "USD",
                  "regularMarketPrice": {
                      "raw": 132.995,
                      "fmt": "132.99"
                  },
                  "regularMarketVolume": {
                      "raw": 101979450,
                      "fmt": "101.98M",
                      "longFmt": "101,979,450.00"
                  },
                  "lastMarket": null,
                  "regularMarketSource": "FREE_REALTIME",
                  "openInterest": {},
                  "marketState": "POST",
                  "underlyingSymbol": null,
                  "marketCap": {
                      "raw": 2232733401088,
                      "fmt": "2.23T",
                      "longFmt": "2,232,733,401,088.00"
                  },
                  "quoteType": "EQUITY",
                  "preMarketChangePercent": {
                      "raw": -0.0034519602,
                      "fmt": "-0.35%"
                  },
                  "volumeAllCurrencies": {},
                  "postMarketSource": "DELAYED",
                  "strikePrice": {},
                  "symbol": "AAPL",
                  "postMarketChangePercent": {
                      "raw": -0.00026308058,
                      "fmt": "-0.03%"
                  },
                  "preMarketSource": "FREE_REALTIME",
                  "maxAge": 1,
                  "fromCurrency": null,
                  "regularMarketChangePercent": {
                      "raw": 0.020213213,
                      "fmt": "2.02%"
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
                          },
                          {
                              "raw": 1620000000,
                              "fmt": "2021-05-03"
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
                          "raw": 77014300000,
                          "fmt": "77.01B",
                          "longFmt": "77,014,300,000"
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
                      "raw": 130.36,
                      "fmt": "130.36"
                  },
                  "regularMarketOpen": {
                      "raw": 129.8,
                      "fmt": "129.80"
                  },
                  "twoHundredDayAverage": {
                      "raw": 123.591156,
                      "fmt": "123.59"
                  },
                  "trailingAnnualDividendYield": {
                      "raw": 0.006190549,
                      "fmt": "0.62%"
                  },
                  "payoutRatio": {
                      "raw": 0.2177,
                      "fmt": "21.77%"
                  },
                  "volume24Hr": {},
                  "regularMarketDayHigh": {
                      "raw": 133,
                      "fmt": "133.00"
                  },
                  "navPrice": {},
                  "averageDailyVolume10Day": {
                      "raw": 88554128,
                      "fmt": "88.55M",
                      "longFmt": "88,554,128"
                  },
                  "totalAssets": {},
                  "regularMarketPreviousClose": {
                      "raw": 130.36,
                      "fmt": "130.36"
                  },
                  "fiftyDayAverage": {
                      "raw": 123.29857,
                      "fmt": "123.30"
                  },
                  "trailingAnnualDividendRate": {
                      "raw": 0.807,
                      "fmt": "0.81"
                  },
                  "open": {
                      "raw": 129.8,
                      "fmt": "129.80"
                  },
                  "toCurrency": null,
                  "averageVolume10days": {
                      "raw": 88554128,
                      "fmt": "88.55M",
                      "longFmt": "88,554,128"
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
                      "raw": 129.47,
                      "fmt": "129.47"
                  },
                  "priceHint": {
                      "raw": 2,
                      "fmt": "2",
                      "longFmt": "2"
                  },
                  "currency": "USD",
                  "trailingPE": {
                      "raw": 36.07133,
                      "fmt": "36.07"
                  },
                  "regularMarketVolume": {
                      "raw": 101979450,
                      "fmt": "101.98M",
                      "longFmt": "101,979,450"
                  },
                  "lastMarket": null,
                  "maxSupply": {},
                  "openInterest": {},
                  "marketCap": {
                      "raw": 2232733401088,
                      "fmt": "2.23T",
                      "longFmt": "2,232,733,401,088"
                  },
                  "volumeAllCurrencies": {},
                  "strikePrice": {},
                  "averageVolume": {
                      "raw": 106951765,
                      "fmt": "106.95M",
                      "longFmt": "106,951,765"
                  },
                  "priceToSalesTrailing12Months": {
                      "raw": 7.5908456,
                      "fmt": "7.59"
                  },
                  "dayLow": {
                      "raw": 129.47,
                      "fmt": "129.47"
                  },
                  "ask": {
                      "raw": 132.91,
                      "fmt": "132.91"
                  },
                  "ytdReturn": {},
                  "askSize": {
                      "raw": 1000,
                      "fmt": "1k",
                      "longFmt": "1,000"
                  },
                  "volume": {
                      "raw": 101979450,
                      "fmt": "101.98M",
                      "longFmt": "101,979,450"
                  },
                  "fiftyTwoWeekHigh": {
                      "raw": 145.09,
                      "fmt": "145.09"
                  },
                  "forwardPE": {
                      "raw": 28.296808,
                      "fmt": "28.30"
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
                      "raw": 132.9,
                      "fmt": "132.90"
                  },
                  "tradeable": false,
                  "dividendYield": {
                      "raw": 0.0063,
                      "fmt": "0.63%"
                  },
                  "bidSize": {
                      "raw": 900,
                      "fmt": "900",
                      "longFmt": "900"
                  },
                  "dayHigh": {
                      "raw": 133,
                      "fmt": "133.00"
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
                  "shortTermTrend": "DOWN",
                  "midTermTrend": "UP",
                  "longTermTrend": "UP",
                  "maxAge": 1
              }
          }
      ]
  ]
  /*
    // clean display data
    this.displayData = [];

    // get saved user data
    var userData = this.getUserData();
    this.savedUserData = userData;

    // iterate
    this.savedUserData.forEach(element => {

      this.data$ = this.defaultService.getData(element.tickerSymbol)
        .subscribe(data => {
          this.config = <DefaultData>data;
          
          // strinigfy data to be combined
          var eD = JSON.stringify(this.config);
          var uD = JSON.stringify(element);

          // combine
          var fullData = `[${uD}, ${eD}]`;

          // push to displayData
          this.displayData.push(JSON.parse(fullData));
        },
        error => this.error = error);
    })
*/
    console.log(this.displayData);

  }

  getUserData() {
    var userStockData = JSON.parse(localStorage.getItem('input1'));

    return userStockData;
  }

  // add a stock to the local storage list
  addStock() {
    console.log('add stock');
  }

  ngOnInit(): void {
    localStorage.setItem('input1', JSON.stringify([{
        "tickerSymbol": "AAPL",
        "fractionalShares": 0.167,
        "averageCost": 136.36
      }, {
        "tickerSymbol": "ABBV",
        "fractionalShares": 0.300,
        "averageCost": 99.33
      }, {
        "tickerSymbol": "ACN",
        "fractionalShares": 0.150,
        "averageCost": 255.00
      }
    ]));
    this.inputItem = localStorage.input1;

    this.fetchData();
  }

}
