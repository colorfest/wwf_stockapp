import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Stocks } from '../models/Stocks';

@Injectable({
  providedIn: 'root'
})
export class DeleteStockService {
  pageMessage: string;

  stocks = [];

  itemCollection: AngularFirestoreCollection<Stocks>;
  items: Observable<Stocks>;

  itemDoc: AngularFirestoreDocument<Stocks>;

  constructor(private afs: AngularFirestore) { }

  /**
   * Set the stock to delete and then pass to local storage deletion.
   * @param stock 
   */
  deleteFromPortfolio (stock: Stocks) {
    this.stocks = [];
    this.stocks.push(stock);

    // delete stock document from record based on userid and document id
    this.itemDoc = this.afs.doc(`/users/VSkKdm4Js36DYwixZh7L/userStocks/${stock.id}`);
    this.itemDoc.delete();

  }
}
