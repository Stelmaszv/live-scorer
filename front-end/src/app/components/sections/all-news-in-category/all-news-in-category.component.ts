import { Component} from '@angular/core';
import { PaginatorComponent } from '../../commom/paginator/paginator.component' 
import { News_Model } from  '../../../models/news'
@Component({
  selector: 'app-all-news-in-category',
  templateUrl: './all-news-in-category.component.html',
  styleUrls: ['./all-news-in-category.component.scss']
})
export class AllNewsInCategoryComponent extends PaginatorComponent {
  category:string
  pagination_data:Array<News_Model>;
  protected init() : void{
    this.category = this.route.snapshot.paramMap.get('category');
    this.get_pages='Get_news_from_category_pages/'+this.category
    this.pagination_data_get_method=this.ns.Get_All_News_From_Category(this.category,this.page)
  }
  protected get_more() : void 
  {
    this.page=this.page+1
    this.pagination_data_get_method=this.ns.Get_All_News_From_Category(this.category,this.page)
    this.get_data(this.page)
  }
}
