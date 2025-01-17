import { Component, Input } from '@angular/core';
import {Coments_Model} from '../../../models/coments'
import { PaginatorComponent } from '../paginator/paginator.component' 
@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent extends PaginatorComponent {
  @Input() id:number;
  pagination_data:Array<Coments_Model>;
  protected init() : void{
    this.get_pages='Get_Coments_pages/'+this.id
    this.pagination_data_get_method=this.ns.Get_Coments_service(this.id,this.page)
  }
  protected get_more() : void 
  {
    this.page=this.page+1
    this.pagination_data_get_method=this.ns.Get_Coments_service(this.id,this.page)
    this.get_data(this.page)
  }
}
