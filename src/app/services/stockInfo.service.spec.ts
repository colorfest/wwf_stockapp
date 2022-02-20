import { TestBed } from '@angular/core/testing';

import { StockInfoService } from './stockInfo.service';

describe('StockInfoService', () => {
  let service: StockInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
