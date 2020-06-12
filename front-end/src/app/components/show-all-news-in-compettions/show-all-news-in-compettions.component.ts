import { Component, OnInit } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component' 

@Component({
  selector: 'app-show-all-news-in-compettions',
  templateUrl: './show-all-news-in-compettions.component.html',
  styleUrls: ['./show-all-news-in-compettions.component.scss']
})
export class ShowAllNewsInCompettionsComponent extends PaginatorComponent{
 
  category:string
  protected init() : void{
    this.category = this.route.snapshot.paramMap.get('compettion');
    this.get_pages='Get_news_from_category_pages/'+this.category
    this.pagination_data_get_method=this.ns.Get_All_news_By_competition(this.category,this.page)
  }

 
}
