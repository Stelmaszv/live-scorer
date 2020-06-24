import { Component, OnInit } from '@angular/core';
import { Auth_Service } from '../../../service/auth.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{
  invalid_data:boolean;
  constructor(private Auth_Service:Auth_Service) { }
  private login (username:string,password:string){
    let data ={
      'username': username,
      'password' : password
    }
    this.Auth_Service.login(data).subscribe(
        (user) => {
           user.password=btoa(password)
           if(user){
             this.Auth_Service.set_data(user)
           }
        },
        ()=>{
          this.invalid_data=true;
        }
    );
  }
  public login_button(){
      this.login('stelmaszv',"123")
  }
}
