import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePtCreateComponent } from './price-pt-create.component';

describe('PricePtCreateComponent', () => {
  let component: PricePtCreateComponent;
  let fixture: ComponentFixture<PricePtCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePtCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePtCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
