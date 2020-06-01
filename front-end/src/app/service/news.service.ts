import { Injectable } from '@angular/core';
import { News_Model } from '../models/news'
import { HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news:string = 'http://127.0.0.1:8000/news/';
  constructor(private http:HttpClient) { }
  public getOnTopNews() :Observable<News_Model[]> {
    return this.http.get<News_Model[]>(this.news)
}
}
