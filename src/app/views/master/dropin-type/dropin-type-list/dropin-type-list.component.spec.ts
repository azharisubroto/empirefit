import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DropinTypeListComponent } from "./dropin-type-list.component";

describe("DropinTypeListComponent", () => {
  let component: DropinTypeListComponent;
  let fixture: ComponentFixture<DropinTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropinTypeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropinTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
