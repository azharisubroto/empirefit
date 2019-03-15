import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropinCompanyCreateComponent } from './dropin-company-create.component';

describe('DropinCompanyCreateComponent', () => {
  let component: DropinCompanyCreateComponent;
  let fixture: ComponentFixture<DropinCompanyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropinCompanyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropinCompanyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
