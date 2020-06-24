import { Component} from '@angular/core';
import { NewsService } from '../../../service/news.service'
import { Auth_Service } from '../../../service/auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent{

  constructor(private ns:NewsService,private Auth_Service:Auth_Service,private router: Router) { }
  create = new FormGroup({
    title: new FormControl(),
    views: new FormControl(),
    Competition: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
    author: new FormControl(),
  });
  private add_post(){
    this.create=this.Auth_Service.add_auth_form(this.create)
    this.ns.Add_new_news(this.create.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
  public onSubmit(){
    this.add_post()
  }

}
