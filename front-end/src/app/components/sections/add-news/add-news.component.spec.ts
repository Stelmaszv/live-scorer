import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddNewsComponent } from './add-news.component';
import { NewsService } from '../../../service/news.service'
import { HttpClientModule } from '@angular/common/http';
import { Auth_Service } from '../../../service/auth.service';
describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientModule,RouterTestingModule],
      providers: [
        NewsService,
        Auth_Service
      ],
      declarations: [ AddNewsComponent ]
    })
    .compileComponents().then(() =>{
        fixture=TestBed.createComponent(AddNewsComponent);
        component =fixture.componentInstance
    })
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
