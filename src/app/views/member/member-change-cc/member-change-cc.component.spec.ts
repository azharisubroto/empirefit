import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberChangeCcComponent } from './member-change-cc.component';

describe('MemberChangeCcComponent', () => {
  let component: MemberChangeCcComponent;
  let fixture: ComponentFixture<MemberChangeCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberChangeCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberChangeCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
