# Wwfstockapp

A web-based app for tracking individual or retail investor stock information. Focus is on dividends, growth, and charting portfolio diversity.

## Key Local Storage
The app will utilize LocalStorage to populate data as needed. One goal of the project is to minimize API calls when not necessary.

For instance, if a user is simply changing the number of shares owned, there is no need to refresh the entire data set with an API call. All that is required are calculations for the new information entered.

If a stock is added or delete, or if it has been 24 hours since the last data update, the app will call the api to retreive the latest data available from the API.

### Local Storage Definitions
<ul>
    <li><strong>wwfStockData</strong> - Stocks saved by the user. Information included is ticker symbol, fractional shares owned, and averge price paid.</li>
    <li><strong>wwfAPIData</strong> - Using wwfStockData, wwfAPIData is retrieve from Yahoo Finance and combined into one json set to display for the user.</li>
    <li><strong>wwfSavedData</strong> - The combined user and api data to display in the view.</li>
    <li><strong>wwfUpdateDate</strong> - The date timestamp of the last time data was updated.</li>
</ul>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
