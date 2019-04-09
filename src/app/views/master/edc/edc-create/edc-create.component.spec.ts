import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcCreateComponent } from './edc-create.component';

describe('EdcCreateComponent', () => {
  let component: EdcCreateComponent;
  let fixture: ComponentFixture<EdcCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdcCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdcCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
