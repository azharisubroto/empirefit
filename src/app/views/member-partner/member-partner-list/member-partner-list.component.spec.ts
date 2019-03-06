import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MemberPartnerComponent } from "./member-partner-list.component";

describe("MemberPartnerComponent", () => {
  let component: MemberPartnerComponent;
  let fixture: ComponentFixture<MemberPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberPartnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
