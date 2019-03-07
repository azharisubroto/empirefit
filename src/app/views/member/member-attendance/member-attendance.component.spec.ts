import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MemberAttendanceComponent } from "./member-attendance.component";

describe("MemberAttendanceComponent", () => {
  let component: MemberAttendanceComponent;
  let fixture: ComponentFixture<MemberAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberAttendanceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
