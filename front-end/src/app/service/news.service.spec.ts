let httpClientSpy: { get: jasmine.Spy };
import { NewsService } from './news.service';
import { News_Model } from '../models/news';
import { of } from 'rxjs'
describe('NewsService', () => {
  let service : NewsService;
  
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new NewsService(<any> httpClientSpy);
  });
  it('test for method Get_Top_News', () => {
    const expected_news: News_Model[]=
    [
      {
          "id": 192,
          "title":"hethetheth",
          "photo": "/media/img/96129015_3180369475321214_7195762880296255488_o.jpg",
          "views": 4

      },
      {
          "id": 191,
          "title":"313",
          "photo": "/media/img/96273818_2578900119039593_6136677829762351104_o.png",
          "views": 3,
      },
      {
          "id": 193,
          "title":"hethethethq qtt",
          "photo": "/media/img/104026385_3096420857117318_1746630688126734633_n_7diC27y.jpg",
          "views": 2,
      }
  ]
  httpClientSpy.get.and.returnValue(of(expected_news));
    service.Get_Top_News().subscribe(
      news => expect(news).toEqual(expected_news, 'expected news'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
