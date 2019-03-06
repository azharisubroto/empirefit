import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InstructureFormComponent } from "./instructure-form.component";

describe("InstructureFormComponent", () => {
  let component: InstructureFormComponent;
  let fixture: ComponentFixture<InstructureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructureFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
