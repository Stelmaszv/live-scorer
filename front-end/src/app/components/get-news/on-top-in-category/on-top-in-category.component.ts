import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-on-top-in-category',
  templateUrl: './on-top-in-category.component.html',
  styleUrls: ['./on-top-in-category.component.scss']
})
export class OnTopInCategoryComponent implements OnInit {
  @Input() Competition_id:number;
  @Input() Category_id:number;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Category_id)
  }

}
