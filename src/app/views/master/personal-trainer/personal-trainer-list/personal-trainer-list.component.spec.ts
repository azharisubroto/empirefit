import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonalTrainerListComponent } from "./personal-trainer-list.component";

describe("PersonalTrainerListComponent", () => {
  let component: PersonalTrainerListComponent;
  let fixture: ComponentFixture<PersonalTrainerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalTrainerListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
