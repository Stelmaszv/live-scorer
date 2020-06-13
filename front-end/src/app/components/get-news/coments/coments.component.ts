import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {
  @Input() id:number;
  constructor() { }

  ngOnInit(): void {
  }

}
