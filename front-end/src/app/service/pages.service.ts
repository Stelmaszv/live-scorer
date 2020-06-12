import { Injectable } from '@angular/core';
import { Pages_Model } from '../models/pages';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Pages_Service {
  Pages_From_ctegory_url:string = 'http://127.0.0.1:8000/';
  constructor(private http:HttpClient) { }
  public get_pages(category,page) :Observable<Pages_Model> {
    return this.http.get<Pages_Model>(this.Pages_From_ctegory_url+''+category+'/?page='+page)
  }
}
