import { Component, OnInit ,Input } from '@angular/core';
import {Get_News_Model } from '../../../models/get_news'
import {NewsService} from '../../../service/news.service'
import {Coments_Model} from '../../../models/coments'
@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {
  @Input() id:number;
  coments:Coments_Model[];
  constructor(private ns:NewsService) { }

  ngOnInit(): void {
    this.Get_Coments(this.id,1)
  }
  private Get_Coments(id:number,page:number) : void
  {
    this.ns.Get_Coments_service(id,page).subscribe(coments=>{
      this.coments=coments
    })
  }

}
