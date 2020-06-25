import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllNewsInCompettionsNavbarComponent } from './show-all-news-in-compettions-navbar.component';

describe('ShowAllNewsInCompettionsNavbarComponent', () => {
  let component: ShowAllNewsInCompettionsNavbarComponent;
  let fixture: ComponentFixture<ShowAllNewsInCompettionsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllNewsInCompettionsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllNewsInCompettionsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
