import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbPayComponent } from './fnb-pay.component';

describe('FnbPayComponent', () => {
  let component: FnbPayComponent;
  let fixture: ComponentFixture<FnbPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnbPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnbPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
