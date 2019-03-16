import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBenefitCreateComponent } from './club-benefit-create.component';

describe('ClubBenefitCreateComponent', () => {
  let component: ClubBenefitCreateComponent;
  let fixture: ComponentFixture<ClubBenefitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubBenefitCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubBenefitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
