import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Stocks } from '../models/Stocks';
import { StockInfo } from '../models/StockInfo';

@Injectable({
  providedIn: 'root'
})
export class StockInfoService {
  // stock info
  stockCollection: AngularFirestoreCollection<Stocks>;
  stocks: Observable<Stocks[]>;

  // user info
  usersCollection: AngularFirestoreCollection<StockInfo>;
  userDoc: AngularFirestoreDocument<StockInfo>;
  users: Observable<StockInfo[]>;
  user: Observable<StockInfo>;

  constructor(private afs: AngularFirestore) {
    // set stockCollection based on user
    this.stockCollection = this.afs.collection('/users/VSkKdm4Js36DYwixZh7L/userStocks',
    ref => ref.orderBy('tickerSymbol', 'desc'))
  }

  getStocks(): Observable<Stocks[]> {
    console.log('GET STOCKS');
    console.log('stock collection');console.log(this.stockCollection);
    
    // get stocks with id - use snapshot changes
    this.stocks = this.stockCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Stocks;

        // add document id for later edits or deletes
        data.id = action.payload.doc.id;

        return data;
      });
    }));

    this.stocks.subscribe(res => console.log('stocks', res));

    return this.stocks;
  }

  fetchUserStockData(stocks: Stocks) {
    console.log(stocks);
  }
}