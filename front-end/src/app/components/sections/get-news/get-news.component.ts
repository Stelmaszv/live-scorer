import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../service/news.service';
import { Get_News_Model } from '../../../models/get_news'
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-get-news',
  templateUrl: './get-news.component.html',
  styleUrls: ['./get-news.component.scss']
})
export class GetNewsComponent implements OnInit {
  news:Get_News_Model;
  id:string;
  news_jason:string
  constructor(private route: ActivatedRoute,private ns:NewsService) { }

  public ngOnInit() : void 
  {
    this.id = this.route.snapshot.paramMap.get('id');
    this.get_news();
  }
  private get_news() : void 
  {
    this.ns.Get_news_service(this.id).subscribe(news=>{
        this.news=news
        this.news_jason=JSON.stringify(news)
    })
  }

}
