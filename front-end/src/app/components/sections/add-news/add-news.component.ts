import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../service/news.service'
import { Auth_Service } from '../../../service/auth.service';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  constructor(private ns:NewsService,private Auth_Service:Auth_Service) { }

  ngOnInit(): void {
    this.Auth_Service.username='stelmaszv'
    this.Auth_Service.password='123'
    this.test_post()
  }
  public test_post(){
      let data = {
        "title": "test auth",
        "views": 314713491346,
        "Competition": 3,
        "category": 3,
        "description": "ylylyilyi525252525l",
        "author": 1,
        "created": "2020-06-22T13:00:50.966290Z",
        "username": this.Auth_Service.username,
        "password": this.Auth_Service.password,
    }
    this.ns.Add_new_news(data).subscribe(() => {
        console.log('ok')
    });
  }

}
