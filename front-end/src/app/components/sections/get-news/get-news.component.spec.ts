import { async, ComponentFixture, TestBed,fakeAsync } from '@angular/core/testing';
import { GetNewsComponent } from './get-news.component';
import { ActivatedRoute} from '@angular/router';
import { NewsService } from '../../../service/news.service';
import { HttpClientTestingModule,} from '@angular/common/http/testing';

const fakeActivatedRoute = {
  snapshot: { data: {} 
}
} as ActivatedRoute;
describe('GetNewsComponent', () => {
  let component: GetNewsComponent;
  let fixture: ComponentFixture<GetNewsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GetNewsComponent ],
      providers: [
        NewsService,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute}
      ]
    })
    .compileComponents().then(() =>{
        fixture = TestBed.createComponent(GetNewsComponent)
        component=fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
