import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../service/news.service'
import { News_Model } from  '../../models/news'
import { Pages_Model } from  '../../models/pages'
import { ActivatedRoute} from '@angular/router';
import { HostListener } from '@angular/core';
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
  loding:Boolean=false;
  loding_click:Boolean=false;
  constructor(private ns:NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.page=1;
    this.list_news=[]
    this.get_news(this.category,this.page)
  }
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrool_evant()
  }
  private scrool_evant(){
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const max = Math.max( 
      document.body.scrollHeight, 
      document.body.offsetHeight,
      document.documentElement.clientHeight, 
      document.documentElement.scrollHeight, 
      document.documentElement.offsetHeight 
    );
    const max_procent=5*max/100 
    if(verticalOffset>max_procent){
      if (this.pages.valid){
          if(this.loding_click==false){
            this.get_more_news()
            document.body.scrollTop=0
          }
      }
    }
  }
  private get_news(category,page){
    this.loding_click=true
    this.ns.Get_All_News_From_Category_pages(category,page).subscribe(pages => {
       this.pages=pages
       if (pages.valid){
          this.loding=true
          this.ns.Get_All_News_From_Category(category,page).subscribe(news => {
          for (let item of news ){
            this.list_news.push(item)
          }
          this.news=this.list_news
          this.loding=false;
          this.loding_click=false;
        });
      }
    });
  }
  private get_more_news() {
    this.page=this.page+1
    this.get_news(this.category,this.page)
  }
}
