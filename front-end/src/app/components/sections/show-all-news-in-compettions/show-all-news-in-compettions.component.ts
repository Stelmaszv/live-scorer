import { Component } from '@angular/core';
import { PaginatorComponent } from '../../../components/commom/paginator/paginator.component' 
import { News_Model } from  '../../../models/news'

@Component({
  selector: 'app-show-all-news-in-compettions',
  templateUrl: './show-all-news-in-compettions.component.html',
  styleUrls: ['./show-all-news-in-compettions.component.scss']
})
export class ShowAllNewsInCompettionsComponent extends PaginatorComponent{
  compettion:string
  pagination_data:Array<News_Model>;
  protected init() : void{
    this.compettion = this.route.snapshot.paramMap.get('compettion');
    this.get_pages='Get_news_from_category_pages/'+this.compettion
    this.pagination_data_get_method=this.ns.Get_All_news_By_competition(this.compettion,this.page)
  }
}
