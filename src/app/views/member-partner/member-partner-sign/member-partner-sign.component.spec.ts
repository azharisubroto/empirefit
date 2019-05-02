import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPartnerSignComponent } from './member-partner-sign.component';

describe('MemberPartnerSignComponent', () => {
  let component: MemberPartnerSignComponent;
  let fixture: ComponentFixture<MemberPartnerSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPartnerSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPartnerSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
