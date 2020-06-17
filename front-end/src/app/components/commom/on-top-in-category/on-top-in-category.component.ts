import { Component, OnInit,Input } from '@angular/core';
import { NewsService } from '../../../service/news.service';
import { Get_News_Model } from '../../../models/get_news'

@Component({
  selector: 'app-on-top-in-category',
  templateUrl: './on-top-in-category.component.html',
  styleUrls: ['./on-top-in-category.component.scss']
})
export class OnTopInCategoryComponent implements OnInit {
  @Input() Competition_id:number;
  @Input() Category_id:number;
  Get_top_news_in_Competition_loop:Get_News_Model[]
  Get_top_news_in_Category_loop:Get_News_Model[]
  constructor(private ns:NewsService) { }

  ngOnInit(): void {
    this.Get_top_news_in_Competition(this.Competition_id)
    this.Get_top_news_in_Category(this.Category_id)
  }
  private Get_top_news_in_Competition(competition_id): void
  {
    this.ns.Get_top_news_in_Competition_service(competition_id).subscribe(news=>{
      this.Get_top_news_in_Competition_loop=news
    })
  }
  private Get_top_news_in_Category(competition_id): void
  {
    this.ns.Get_top_news_in_Category_service(competition_id).subscribe(news=>{
      this.Get_top_news_in_Category_loop=news
    })
  }


}
