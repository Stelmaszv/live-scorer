import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service'
import { News_Model } from  '../../models/news'
import { Pages_Model } from  '../../models/pages'
import { ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-all-news-in-category',
  templateUrl: './all-news-in-category.component.html',
  styleUrls: ['./all-news-in-category.component.scss']
})
export class AllNewsInCategoryComponent implements OnInit {
  news:Array<News_Model>;
  pages:Pages_Model[];
  page:number;
  max:number;
  list_news:Array<any>;
  category:string
  constructor(private ns:NewsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.page=1;
    this.list_news=[]
    this.get_news(this.category,this.page)
  }

  private get_news(category,page){
    this.ns.Get_All_News_From_Category_pages(category,page).subscribe(pages => {
       if (this.page<=pages.max){
          this.ns.Get_All_News_From_Category(category,page).subscribe(news => {
          for (let item of news ){
            this.list_news.push(item)
          }
          this.news=this.list_news
        });
      }
    });
  }
  get_more_news() {
    this.page=this.page+1
    this.get_news(this.category,this.page)
  }
}
