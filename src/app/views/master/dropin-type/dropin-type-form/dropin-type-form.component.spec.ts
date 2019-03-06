import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DropinTypeFormComponent } from "./dropin-type-form.component";

describe("DropinTypeFormComponent", () => {
  let component: DropinTypeFormComponent;
  let fixture: ComponentFixture<DropinTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropinTypeFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropinTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
