import { TestBed } from '@angular/core/testing';

import { RowUpdateService } from './row-update.service';

describe('RowUpdateService', () => {
  let service: RowUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RowUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
