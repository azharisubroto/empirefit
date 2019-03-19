import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuestionsCreateComponent } from './health-questions-create.component';

describe('HealthQuestionsCreateComponent', () => {
  let component: HealthQuestionsCreateComponent;
  let fixture: ComponentFixture<HealthQuestionsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthQuestionsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuestionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
