import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {NewsService} from '../../service/news.service'
import { Pages_Service } from '../../service/pages.service'
import { Pages_Model } from  '../../models/pages'
import { HostListener } from '@angular/core';
import { News_Model } from  '../../models/news'
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
  list:Array<any>;
  pagination_data;
  page:number;

  category='soccer';

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrool_evant()
  }

  constructor(protected ns:NewsService, protected route: ActivatedRoute,protected Pages_Service:Pages_Service) { }
  
  public ngOnInit(): void {
    this.page=1;
    this.init()
    this.list=[]
    this.get_data(this.page)
    this.check()
  }
  protected abstract init() : void;

  protected get_data(page) : void 
  {
    this.loding_click=true
    this.Pages_Service.get_pages(this.get_pages,page).subscribe(pages => {
       this.pages=pages
       if (pages.valid){
          this.loding=true
          this.pagination_data_get_method.subscribe(news => {  
            for (let item of news ){
              this.list.push(item)
            }
            this.pagination_data=this.list
            this.loding=false;
            this.loding_click=false;
          });
      }
    });
  }

  protected scrool_evant() : void 
  {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const max = Math.max( 
      document.body.scrollHeight, 
      document.body.offsetHeight,
      document.documentElement.clientHeight, 
      document.documentElement.scrollHeight, 
      document.documentElement.offsetHeight 
    );
    const max_procent=2*max/100 
    if(verticalOffset>max_procent){
      if (this.pages.valid){
          if(!this.loding){
            this.get_more()
            document.body.scrollTop=0
          }
      }
    }
  }

  protected get_more() : void 
  {
    this.page=this.page+1
    this.get_data(this.page)
  }

  private check() : void 
  {
    if (this.get_pages == undefined){
      console.log('this.get_pages is undefined')
    }
    if (this.pagination_data_get_method == undefined){
      console.log('this.pagination_data_get_method is undefined')
    }
    if(typeof this.pagination_data_get_method != 'object'){
      console.log('valule must method in class')
    }
  }
}
