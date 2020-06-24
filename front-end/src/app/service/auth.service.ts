import { Injectable } from '@angular/core';
import {Auth_Model} from '../models/auth' 
import { HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Login_Model} from '../models/login'
import {Observable} from 'rxjs';
const options = {
  headers: { 'Content-Type': ['application/json'] }
};
@Injectable({
  providedIn: 'root'
})
export class Auth_Service {
  username:string;
  password:string;
  login_url='http://127.0.0.1:8000/login/'
  constructor(private http:HttpClient) { }
  public login(data:Login_Model)
  {
    return this.http.post(this.login_url,data,options) 
  }
  public add_auth_form (from)
  {
    from.addControl('username',new FormControl(this.username))
    from.addControl('password',new FormControl(this.password))
    return from
  }
}
