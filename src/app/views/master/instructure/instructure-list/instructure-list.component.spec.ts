import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InstructureListComponent } from "./instructure-list.component";

describe("InstructureListComponent", () => {
  let component: InstructureListComponent;
  let fixture: ComponentFixture<InstructureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstructureListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
