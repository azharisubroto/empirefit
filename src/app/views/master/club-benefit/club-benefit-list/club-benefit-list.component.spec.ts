import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ClubBenefitListComponent } from "./club-benefit-list.component";

describe("ClubBenefitListComponent", () => {
  let component: ClubBenefitListComponent;
  let fixture: ComponentFixture<ClubBenefitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClubBenefitListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubBenefitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
