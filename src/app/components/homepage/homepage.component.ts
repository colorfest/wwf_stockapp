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

  constructor(private defaultService: DefaultService) { }

  fetchData() {
    console.log('fetch data');

    this.data$ = this.defaultService.getData()
      .subscribe((data: DefaultData) => this.config = { ...data }, // success path
      error => this.error = error // error path
    );

    console.log(this.config);
  }

  ngOnInit(): void {
    localStorage.setItem('input1', '1');
    this.inputItem = localStorage.input1;
  }

}
