import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructureCreateComponent } from './instructure-create.component';

describe('InstructureCreateComponent', () => {
  let component: InstructureCreateComponent;
  let fixture: ComponentFixture<InstructureCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructureCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
