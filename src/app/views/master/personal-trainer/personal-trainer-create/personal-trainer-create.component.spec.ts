import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrainerCreateComponent } from './personal-trainer-create.component';

describe('PersonalTrainerCreateComponent', () => {
  let component: PersonalTrainerCreateComponent;
  let fixture: ComponentFixture<PersonalTrainerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTrainerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
