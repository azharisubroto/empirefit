import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DropinCompanyFormComponent } from "./dropin-company-form.component";

describe("DropinCompanyFormComponent", () => {
  let component: DropinCompanyFormComponent;
  let fixture: ComponentFixture<DropinCompanyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropinCompanyFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropinCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
