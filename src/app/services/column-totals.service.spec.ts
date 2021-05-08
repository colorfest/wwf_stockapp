import { TestBed } from '@angular/core/testing';

import { ColumnTotalsService } from './column-totals.service';

describe('ColumnTotalsService', () => {
  let service: ColumnTotalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnTotalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
