import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MemberLeaveComponent } from "./member-leave.component";

describe("MemberLeaveComponent", () => {
  let component: MemberLeaveComponent;
  let fixture: ComponentFixture<MemberLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberLeaveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
