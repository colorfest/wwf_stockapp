import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Stocks } from '../models/Stocks';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // stock info
  stockCollection: AngularFirestoreCollection<Stocks>;
  stocks: Observable<Stocks[]>;

  // user info
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.stockCollection = this.afs.collection('stocks',
    ref => ref.orderBy('tickerSymbol', 'asc'))
  }

  getStocks(): Observable<Stocks[]> {
    // get stocks with id - use snapshot changes
    this.stocks = this.stockCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Stocks;
        // data.id = action.payload.doc.id;
        console.log(data);
        return data;
      });
    }));

    return this.stocks;
  }
}
