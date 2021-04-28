import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddStockService } from '../../services/add-stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  stocks = this.addStockService.getStocks();
  checkoutForm = this.formBuilder.group({
    tickerSymbol: '',
    fractionalShares: null,
    averageCost: null
  })

  constructor(
    private formBuilder: FormBuilder, 
    private addStockService: AddStockService) { }

    onSubmit(): void {
      this.addStockService.addToPortfolio(this.checkoutForm.value);

      this.stocks = this.addStockService.clearStocks();
      console.warn(`Your stock has been submitted.`, this.checkoutForm.value);
    }

  ngOnInit(): void {
  }

}
