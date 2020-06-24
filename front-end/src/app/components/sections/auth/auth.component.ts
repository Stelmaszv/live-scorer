import { Component } from '@angular/core';
import { Auth_Service } from '../../../service/auth.service'
import {FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{
  invalid_data:boolean;
  constructor(private Auth_Service:Auth_Service) { }
  login_form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  private login (){
    this.Auth_Service.login(this.login_form.value).subscribe(
        (user) => {
           user.password=btoa(this.login_form.value.password)
           if(user){
             this.Auth_Service.set_data(user)
             window.location.href = '/'
           }
        },
        ()=>{
          this.invalid_data=true;
        }
    );
  }
  public login_button(){
      this.login()
  }
}
