import { Component, OnInit } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component' 

@Component({
  selector: 'app-show-all-news-in-compettions',
  templateUrl: './show-all-news-in-compettions.component.html',
  styleUrls: ['./show-all-news-in-compettions.component.scss']
})
export class ShowAllNewsInCompettionsComponent extends PaginatorComponent{
 
  compettion:string
  protected init() : void{
    this.compettion = this.route.snapshot.paramMap.get('compettion');
    this.get_pages='Get_news_from_category_pages/'+this.compettion
    this.pagination_data_get_method=this.ns.Get_All_news_By_competition(this.compettion,this.page)
  }

 
}
