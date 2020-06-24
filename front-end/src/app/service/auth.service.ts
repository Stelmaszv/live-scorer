import { Injectable } from '@angular/core';
import {Auth_Model} from '../models/auth' 
import { HttpClient} from '@angular/common/http';
import {FormControl,FormGroup} from '@angular/forms';
import {Login_Model} from '../models/login'
import {Observable} from 'rxjs';
const options = {
  headers: { 'Content-Type': ['application/json'] }
};
@Injectable({
  providedIn: 'root'
})
export class Auth_Service {
  login_url='http://127.0.0.1:8000/login/'
  constructor(private http:HttpClient) { }
  public login(data:Login_Model) :Observable<Auth_Model>
  {
    return this.http.post<Auth_Model>(this.login_url,data,options) 
  }
  public add_auth_form (from) :FormGroup
  {
    const user=this.get_auth()
    from.addControl('username',new FormControl(user.username))
    from.addControl('password',new FormControl(atob(user.password)))
    return from
  }
  public set_data(user){
    localStorage.setItem('user', JSON.stringify(user));
  }
  private get_auth()
  {
    return JSON.parse(localStorage.getItem('user'))
  }
  public if_auth() :boolean
  {
    if(this.get_auth()){
      return true;
    }
    return false;
  }
}
