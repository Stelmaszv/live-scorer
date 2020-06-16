import { Component, OnInit ,Input } from '@angular/core';
import {Get_News_Model } from '../../../models/get_news'
@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {
  @Input() data:string;
  data_parse:Get_News_Model;
  constructor() { }

  ngOnInit(): void {
    this.data_parse = JSON.parse(this.data);
  }

}
