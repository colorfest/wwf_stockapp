import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpClientModule } from "@angular/common/http";
import { CurrencyPipe} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { YahooService } from './services/yahoo.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { AddStockService } from './services/add-stock.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import {MatIconModule} from '@angular/material/icon';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { StockListFullComponent } from './components/stock-list-full/stock-list-full.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    AddStockComponent,
    TopNavComponent,
    ModalAlertComponent,
    StockListFullComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule, 
    MatIconModule,
    RxReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [YahooService, AddStockService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
