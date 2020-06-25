import { Component, OnInit , Input } from '@angular/core';
import {NewsService} from '../../../service/news.service'
import { News_Model } from  '../../../models/news'
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  @Input() category:string
  news:News_Model[];
  mian:News_Model;
  constructor(private ns:NewsService) { }

  ngOnInit(): void {
    this.From_Category(this.category)
  }
  private From_Category (category) :any  {
    this.ns.Get_News_From_Category(category).subscribe(
      items => {
        this.news=items      
        this.mian=items[0]
      },
      (err) => {
        console.log(err)
      }
  )}

}
