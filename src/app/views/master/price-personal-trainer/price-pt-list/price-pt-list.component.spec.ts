import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PricePtListComponent } from "./price-pt-list.component";

describe("PricePtListComponent", () => {
  let component: PricePtListComponent;
  let fixture: ComponentFixture<PricePtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PricePtListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
