import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberActivationSuccessComponent } from './member-activation-success.component';

describe('MemberActivationSuccessComponent', () => {
  let component: MemberActivationSuccessComponent;
  let fixture: ComponentFixture<MemberActivationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberActivationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberActivationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
