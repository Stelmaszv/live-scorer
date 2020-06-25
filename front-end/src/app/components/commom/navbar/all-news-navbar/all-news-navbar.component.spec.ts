import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsNavbarComponent } from './all-news-navbar.component';

describe('AllNewsNavbarComponent', () => {
  let component: AllNewsNavbarComponent;
  let fixture: ComponentFixture<AllNewsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNewsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNewsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  */
});
