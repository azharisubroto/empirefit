import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ClubBenefitFormComponent } from "./club-benefit-form.component";

describe("ClubBenefitFormComponent", () => {
  let component: ClubBenefitFormComponent;
  let fixture: ComponentFixture<ClubBenefitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClubBenefitFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubBenefitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
