import { Component} from '@angular/core';
import { News_Model } from  '../../models/news'
import { PaginatorComponent } from '../paginator/paginator.component' 
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
    this.page=1;
    this.get_pages='Get_news_from_category_pages/'+this.category
    this.pagination_data_get_method=this.ns.Get_All_News_From_Category(this.category,this.page)
  }
}
