import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PricePtFormComponent } from "./price-pt-form.component";

describe("PricePtFormComponent", () => {
  let component: PricePtFormComponent;
  let fixture: ComponentFixture<PricePtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PricePtFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
