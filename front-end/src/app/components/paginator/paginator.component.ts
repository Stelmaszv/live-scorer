import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {NewsService} from '../../service/news.service'
import { Pages_Service } from '../../service/pages.service'
import { Pages_Model } from  '../../models/pages'
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export abstract class PaginatorComponent implements OnInit {
  loding_click:Boolean=false;
  get_pages:string;
  pages:Pages_Model;
  loding:Boolean=false;
  pagination_data_get_method
  list_news:Array<any>;
  pagination_data;
  page:number;
  constructor(protected ns:NewsService, protected route: ActivatedRoute,protected Pages_Service:Pages_Service) { }
  ngOnInit(): void {
    this.init()
    this.get_data(this.page)
    this.list_news=[]
  }
  protected abstract init() : void;
  protected get_data(page){
    this.loding_click=true
    this.Pages_Service.get_pages(this.get_pages,page).subscribe(pages => {
       this.pages=pages
       if (this.pages.valid){
          this.loding=true
          this.pagination_data_get_method.subscribe(news => {
          for (let item of news ){
            this.list_news.push(item)
          }
          this.pagination_data=this.list_news
          this.loding=false;
          this.loding_click=false;
        });
      }
    });
  }
  
  protected scrool_evant(){
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
            this.get_data(this.page)
            document.body.scrollTop=0
          }
      }
    }
  }

}
