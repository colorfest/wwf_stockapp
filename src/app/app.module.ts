import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { CurrencyPipe} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DefaultService } from './services/default.service';

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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    AddStockComponent,
    TopNavComponent,
    ModalAlertComponent
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
    RxReactiveFormsModule
  ],
  providers: [DefaultService, AddStockService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
