import { Injectable } from '@angular/core';
import { Pages_Model } from '../models/pages';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Pages_Service {
  base:string = 'http://127.0.0.1:8000/';
  constructor(private http:HttpClient) { }
  public get_pages(url:string,page:number) :Observable<Pages_Model> {
    return this.http.get<Pages_Model>(this.base+''+url+'/?page='+page)
  }
}
