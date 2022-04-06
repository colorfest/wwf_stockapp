import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs/Observable';
import { Stocks } from '../models/Stocks';

@Injectable({
  providedIn: 'root'
})
export class AddStockService {
  pageMessage: string;
  stocks = [];

  // adding to firestore
  itemsCollection: AngularFirestoreCollection<Stocks>;

  constructor(public afs: AngularFirestore) { 
    // set stockCollection based on user
    this.itemsCollection = this.afs.collection('/users/VSkKdm4Js36DYwixZh7L/userStocks');
  }
  
  
  addToPortfolio(stock: Stocks) {
    console.log('addToPortfolio');
    this.stocks = [];
    this.stocks.push(stock);

    this.itemsCollection.add(stock);
  }


  // resources
  alertMessage(success: boolean) {
    // if true, display message
    if (success) return this.pageMessage = `${this.stocks[0].tickerSymbol} has been added to your portfolio.`
    return this.pageMessage = `There was an error with your upload. Please try again.`
  }

  clearStocks() {
    this.stocks = [];
    return this.stocks;
  }
  
}
