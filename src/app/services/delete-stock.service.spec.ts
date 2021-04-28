import { TestBed } from '@angular/core/testing';

import { DeleteStockService } from './delete-stock.service';

describe('DeleteStockService', () => {
  let service: DeleteStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
