import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAutodebitComponent } from './member-autodebit.component';

describe('MemberAutodebitComponent', () => {
  let component: MemberAutodebitComponent;
  let fixture: ComponentFixture<MemberAutodebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAutodebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAutodebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
