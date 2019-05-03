import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbTransactionComponent } from './fnb-transaction.component';

describe('FnbTransactionComponent', () => {
  let component: FnbTransactionComponent;
  let fixture: ComponentFixture<FnbTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnbTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
