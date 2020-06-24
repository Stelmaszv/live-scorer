import { Component, OnInit } from '@angular/core';
import { Auth_Service } from '../../../service/auth.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{
  constructor(private Auth_Service:Auth_Service) { }
  private login (username:string,password:string){
    let data ={
      'username': username,
      'password' : password
    }
    this.Auth_Service.login(data).subscribe(
        (data_OUT) => {
            console.log(data_OUT)
        },
        (error)=>{
          console.log(error)
        }
    );
  }
  public login_button(){
      this.login('stelmaszv',"123")
  }
}
