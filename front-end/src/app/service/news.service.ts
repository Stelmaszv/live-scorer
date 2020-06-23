import { Injectable } from '@angular/core';
import { News_Model } from '../models/news';
import { Get_News_Model } from '../models/get_news'
import { HttpClient} from '@angular/common/http';
import { Coments_Model } from '../models/coments'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  Top_News_url:string = 'http://127.0.0.1:8000/Get_top_news/';
  Get_News_url:string = 'http://127.0.0.1:8000/Get_News/';
  From_category_url:string = 'http://127.0.0.1:8000/Get_news_from_category/';
  All_From_ctegory_url:string = 'http://127.0.0.1:8000/Get_news_from_category_all/';
  Get_news_from_competitions_url='http://127.0.0.1:8000/Get_top_news_in_Competitions/'
  Get_top_news_in_Category_url='http://127.0.0.1:8000/Get_top_news_in_Category/'
  Get_Coments_url='http://127.0.0.1:8000/Get_Coments/'
  constructor(private http:HttpClient) { }
  public Get_Top_News() :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.Top_News_url)
  }
  public Get_News_From_Category(category) :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.From_category_url+''+category)
  }
  public Add_new_news(data) :Observable<News_Model[]>
  {
    const options = {
      headers: { 'Content-Type': ['application/json'] },
    };
    return this.http.post<News_Model[]>(this.Top_News_url,data,options) 
  }
  public Get_All_News_From_Category(category,page) :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.All_From_ctegory_url+''+category+'?page='+page)
  }
  public Get_All_news_By_competition(competition,page) :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.Get_news_from_competitions_url+''+competition+'?page='+page)
  }
  public Get_news_service(id) :Observable<Get_News_Model>{
    return this.http.get<Get_News_Model>(this.Get_News_url+''+id)
  }
  public Get_top_news_in_Competition_service(id : number) :Observable<Get_News_Model[]>{
    return this.http.get<Get_News_Model[]>(this.Get_news_from_competitions_url+''+id)
  }
  public Get_top_news_in_Category_service(id : number) :Observable<Get_News_Model[]>{
    return this.http.get<Get_News_Model[]>(this.Get_top_news_in_Category_url+''+id)
  }
  public Get_Coments_service(id :number,page:number):Observable<Coments_Model[]>
  {
    return this.http.get<Coments_Model[]>(this.Get_Coments_url+''+id+'?page='+page)
  }
}
