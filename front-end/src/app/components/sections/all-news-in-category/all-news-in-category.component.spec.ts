import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsInCategoryComponent } from './all-news-in-category.component';

describe('AllNewsInCategoryComponent', () => {
  let component: AllNewsInCategoryComponent;
  let fixture: ComponentFixture<AllNewsInCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNewsInCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNewsInCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
