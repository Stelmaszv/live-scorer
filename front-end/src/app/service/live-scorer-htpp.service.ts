import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Competition_Model } from '../models/competitions'
import { Competition_get_Model } from '../models/competitions_get'
@Injectable({
  providedIn: 'root'
})
export class LiveScorerHtppService {
  competitions:string = 'http://127.0.0.1:8000/competitions/';
  get_competition_by_name:string = 'http://127.0.0.1:8000/get_competition_by_name/';
  constructor(private http:HttpClient) { }
  public Get_Competitions_Service() :Observable<Competition_Model[]> {
    return this.http.get<Competition_Model[]>(this.competitions)
  }
  public Get_Competition_by_name(Competition:string ) :Observable<Competition_get_Model> {
    return this.http.get<Competition_get_Model>(this.get_competition_by_name+''+Competition)
  }
}
