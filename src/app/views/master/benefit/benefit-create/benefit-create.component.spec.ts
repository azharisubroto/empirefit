import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitCreateComponent } from './benefit-create.component';

describe('BenefitCreateComponent', () => {
  let component: BenefitCreateComponent;
  let fixture: ComponentFixture<BenefitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
