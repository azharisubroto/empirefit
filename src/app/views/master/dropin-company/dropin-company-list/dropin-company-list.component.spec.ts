import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DropinCompanyListComponent } from "./dropin-company-list.component";

describe("DropinCompanyListComponent", () => {
  let component: DropinCompanyListComponent;
  let fixture: ComponentFixture<DropinCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropinCompanyListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropinCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
