import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropinTypeCreateComponent } from './dropin-type-create.component';

describe('DropinTypeCreateComponent', () => {
  let component: DropinTypeCreateComponent;
  let fixture: ComponentFixture<DropinTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropinTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropinTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
