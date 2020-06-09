import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Competition_Model } from '../models/competitions'
@Injectable({
  providedIn: 'root'
})
export class LiveScorerHtppService {
  competitions:string = 'http://127.0.0.1:8000/competitions/';
  constructor(private http:HttpClient) { }
  public Get_Top_Competitions() :Observable<Competition_Model[]> {
    return this.http.get<Competition_Model[]>(this.competitions)
  }
}
