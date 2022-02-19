import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockListFullComponent } from './stock-list-full.component';

describe('StockListFullComponent', () => {
  let component: StockListFullComponent;
  let fixture: ComponentFixture<StockListFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockListFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
