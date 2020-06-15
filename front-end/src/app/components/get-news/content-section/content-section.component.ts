import { Component, OnInit , Input } from '@angular/core';
import { Get_News_Model } from '../../../models/get_news'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent implements OnInit {
  @Input() data:Get_News_Model;
  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(this.data);
    console.log(this.data)
  }

}
