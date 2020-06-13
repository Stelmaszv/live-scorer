import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Competition_Model } from '../models/competitions'
import { Competition_get_Model } from '../models/competitions_get'
@Injectable({
  providedIn: 'root'
})
export class LiveScorerHtppService {
  Get_competitions:string = 'http://127.0.0.1:8000/competitions/';
  Get_competition_url:string = 'http://127.0.0.1:8000/Get_competition_by_name/';
  Get_Competitions_from_Country_service_url:string='http://127.0.0.1:8000/Get_Competitions_from_Country/'
  constructor(private http:HttpClient) { }
  public Get_Competitions_Service() :Observable<Competition_Model[]> {
    return this.http.get<Competition_Model[]>(this.Get_competitions)
  }
  public Get_Competition(id:number,Competition:string ) :Observable<Competition_get_Model> {
    return this.http.get<Competition_get_Model>(this.Get_competition_url+''+Competition+'/'+id)
  }
  public Get_Competitions_from_Country_service(Country:string ) :Observable<Competition_Model[]> {
    return this.http.get<Competition_Model[]>(this.Get_Competitions_from_Country_service_url+''+Country)
  }
}
