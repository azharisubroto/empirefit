import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPartnerFormComponent } from './member-partner-form.component';

describe('MemberPartnerFormComponent', () => {
  let component: MemberPartnerFormComponent;
  let fixture: ComponentFixture<MemberPartnerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPartnerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPartnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
