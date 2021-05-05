import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AppComponent } from 'src/app/app.component';
import { AddStockService } from '../../services/add-stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  @ViewChild('tickerSymbol') tickerSymbolInput: ElementRef;

  checkoutForm: FormGroup;
  formattedAmount;
  amount;
  message: string;

  numRegex = /^-?\d*[.,]?\d{0,2}$/;

  constructor(
    public appComponent: AppComponent,
    private formBuilder: FormBuilder, 
    private addStockService: AddStockService) { }

    onSubmit(): void {
      this.addStockService.addToPortfolio(this.checkoutForm.value);

      //this.addStockService.clearStocks();

      this.appComponent.stockAdded = true;

      console.warn(`Your stock has been submitted.`, this.checkoutForm.value);

      this.checkoutForm.reset();

      this.tickerSymbolInput.nativeElement.focus();
    }



  ngOnInit(): void {

    this.checkoutForm = this.formBuilder.group({
      tickerSymbol: '',
      fractionalShares: ['', RxwebValidators.numeric({allowDecimal: true, isFormat: true})],
      averageCost: ['', RxwebValidators.numeric({allowDecimal: true, isFormat: true})]
    })
  }

}
