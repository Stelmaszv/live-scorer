import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Get_News_Model } from '../../models/get_news'
@Component({
  selector: 'app-get-news',
  templateUrl: './get-news.component.html',
  styleUrls: ['./get-news.component.scss']
})
export class GetNewsComponent implements OnInit {
  news:Get_News_Model
  id:2;
  constructor(private ns:NewsService) { }

  ngOnInit() : void 
  {
    this.get_news();
  }
  private get_news() : void 
  {
    this.ns.Get_news_service(58).subscribe(news=>{
        this.news=news
    })
  }

}
