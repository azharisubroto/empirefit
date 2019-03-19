import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuestionsListComponent } from './health-questions-list.component';

describe('HealthQuestionsListComponent', () => {
  let component: HealthQuestionsListComponent;
  let fixture: ComponentFixture<HealthQuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
