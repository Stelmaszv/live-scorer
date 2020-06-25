import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SectionsComponent } from './sections.component';
import {NewsService} from '../../../service/news.service'
import { News_Model } from  '../../../models/news'
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { parseHostBindings } from '@angular/compiler';
describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;
  let el:DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientModule,RouterTestingModule],
      providers: [
        News_Model,
        NewsService
      ],
      declarations: [ SectionsComponent ]
    })
    .compileComponents()
    .then(() =>{
      fixture = TestBed.createComponent(SectionsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      el = fixture.debugElement;
    })
  }));
});
