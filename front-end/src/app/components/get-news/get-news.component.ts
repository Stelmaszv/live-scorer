import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { News_Model } from '../../models/news'
@Component({
  selector: 'app-get-news',
  templateUrl: './get-news.component.html',
  styleUrls: ['./get-news.component.scss']
})
export class GetNewsComponent implements OnInit {
  news:News_Model
  constructor(private ns:NewsService) { }

  ngOnInit(): void {
    this.get_news();
  }
  private get_news(){
    this.ns.Get_news_service(58).subscribe(news=>{
        console.log(news)
        this.news=news
    })
  }

}
