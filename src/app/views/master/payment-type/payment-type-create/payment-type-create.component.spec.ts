import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeCreateComponent } from './payment-type-create.component';

describe('PaymentTypeCreateComponent', () => {
  let component: PaymentTypeCreateComponent;
  let fixture: ComponentFixture<PaymentTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
