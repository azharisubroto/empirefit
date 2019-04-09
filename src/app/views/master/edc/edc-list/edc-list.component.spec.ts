import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcListComponent } from './edc-list.component';

describe('EdcListComponent', () => {
  let component: EdcListComponent;
  let fixture: ComponentFixture<EdcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
