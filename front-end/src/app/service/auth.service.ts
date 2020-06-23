import { Injectable } from '@angular/core';
import {Auth_Model} from '../models/auth' 
import {FormControl, FormGroup} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class Auth_Service {
  username:string;
  password:string;
  public add_auth_form (from)
  {
    from.addControl('username',new FormControl(this.username))
    from.addControl('password',new FormControl(this.password))
    return from
  }
}
