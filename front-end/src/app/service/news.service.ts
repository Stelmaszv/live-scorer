import { Injectable } from '@angular/core';
import { News_Model } from '../models/news';
import { Pages_Model } from '../models/pages';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  Top_News_url:string = 'http://127.0.0.1:8000/news/';
  From_category_url:string = 'http://127.0.0.1:8000/Get_news_from_category/';
  All_From_ctegory_url:string = 'http://127.0.0.1:8000/Get_news_from_category_all/';
  Pages_From_ctegory_url:string = 'http://127.0.0.1:8000/Get_news_from_category_pages/';
  constructor(private http:HttpClient) { }
  public Get_Top_News() :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.Top_News_url)
  }
  public Get_News_From_Category(category) :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.From_category_url+''+category)
  }
  public Get_All_News_From_Category(category,page) :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.All_From_ctegory_url+''+category+'?page='+page)
  }
  public Get_All_News_From_Category_pages(category,page) :Observable<Pages_Model[]> {
    return this.http.get<Pages_Model[]>(this.Pages_From_ctegory_url+''+category+'?page='+page)
  }
}
