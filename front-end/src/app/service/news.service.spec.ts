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
      const expected_news: News_Model[]=[]
      httpClientSpy.get.and.returnValue(of(expected_news));
      service.Get_Top_News().subscribe(
        news => expect(news).toEqual(expected_news, 'expected news'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('test for method Get_News_From_Category with catecory soccer', () => {
      const expected_news: News_Model[]=[]
      httpClientSpy.get.and.returnValue(of(expected_news));
      service.Get_News_From_Category('soccer').subscribe(
        news => expect(news).toEqual(expected_news, 'expected news with category soccer'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('test for method Get_All_News_From_Category ', () => {
    const expected_news: News_Model[]=[]
    httpClientSpy.get.and.returnValue(of(expected_news));
    service.Get_All_News_From_Category('soccer',1).subscribe(
      news => expect(news).toEqual(expected_news, 'expected news with category soccer'),
      fail
    );
  });
});
