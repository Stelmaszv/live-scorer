import { Injectable } from '@angular/core';
import {Auth_Model} from '../models/auth' 
@Injectable({
  providedIn: 'root'
})
export class Auth_Service {
  username:string;
  password:string;

}
