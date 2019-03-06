import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonalTrainerFormComponent } from "./personal-trainer-form.component";

describe("PersonalTrainerFormComponent", () => {
  let component: PersonalTrainerFormComponent;
  let fixture: ComponentFixture<PersonalTrainerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalTrainerFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
