import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  @Input() category:string
  constructor() { }

  ngOnInit(): void {
    console.log(this.category)
  }

}
