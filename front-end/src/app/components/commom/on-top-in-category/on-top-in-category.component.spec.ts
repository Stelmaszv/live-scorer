import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTopInCategoryComponent } from './on-top-in-category.component';

describe('OnTopInCategoryComponent', () => {
  let component: OnTopInCategoryComponent;
  let fixture: ComponentFixture<OnTopInCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTopInCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTopInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
