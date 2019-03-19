import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuestionsFormComponent } from './health-questions-form.component';

describe('HealthQuestionsFormComponent', () => {
  let component: HealthQuestionsFormComponent;
  let fixture: ComponentFixture<HealthQuestionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuestionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuestionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
