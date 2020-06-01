import { Component, OnInit } from '@angular/core';
import { News_Model } from  '../../../models/news'
import {NewsService} from '../../../service/news.service'

@Component({
  selector: 'app-ontop',
  templateUrl: './ontop.component.html',
  styleUrls: ['./ontop.component.scss']
})
export class OntopComponent implements OnInit {
  news:News_Model[];
  constructor(private ns:NewsService) { }
  ngOnInit(): void {
    this.Top_News()
  }
  private Top_News () :any {
    this.ns.getOnTopNews().subscribe(items => {
      this.news=items
    });
  }

}
