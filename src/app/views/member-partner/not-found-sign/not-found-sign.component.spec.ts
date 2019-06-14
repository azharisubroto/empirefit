import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundSignComponent } from './not-found-sign.component';

describe('NotFoundSignComponent', () => {
  let component: NotFoundSignComponent;
  let fixture: ComponentFixture<NotFoundSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
