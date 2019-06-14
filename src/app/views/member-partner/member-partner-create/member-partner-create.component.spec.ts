import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPartnerCreateComponent } from './member-partner-create.component';

describe('MemberPartnerCreateComponent', () => {
  let component: MemberPartnerCreateComponent;
  let fixture: ComponentFixture<MemberPartnerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPartnerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPartnerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
