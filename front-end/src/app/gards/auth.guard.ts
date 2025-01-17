import { Injectable  } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Auth_Service } from '../../app/service/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Auth_Service:Auth_Service) { }
  public canActivate() : boolean  {
    return this.Auth_Service.if_auth();
  }
  
}
