import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberUpgradePaymentComponent } from './member-upgrade-payment.component';

describe('MemberUpgradePaymentComponent', () => {
  let component: MemberUpgradePaymentComponent;
  let fixture: ComponentFixture<MemberUpgradePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberUpgradePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberUpgradePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
