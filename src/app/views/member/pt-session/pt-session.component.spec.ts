import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtSessionComponent } from './pt-session.component';

describe('PtSessionComponent', () => {
  let component: PtSessionComponent;
  let fixture: ComponentFixture<PtSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
