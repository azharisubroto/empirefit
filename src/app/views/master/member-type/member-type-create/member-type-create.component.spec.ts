import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypeCreateComponent } from './member-type-create.component';

describe('MemberTypeCreateComponent', () => {
  let component: MemberTypeCreateComponent;
  let fixture: ComponentFixture<MemberTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
