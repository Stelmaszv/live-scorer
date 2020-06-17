import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllNewsInCompettionsComponent } from './show-all-news-in-compettions.component';

describe('ShowAllNewsInCompettionsComponent', () => {
  let component: ShowAllNewsInCompettionsComponent;
  let fixture: ComponentFixture<ShowAllNewsInCompettionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllNewsInCompettionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllNewsInCompettionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
