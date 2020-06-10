import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-all-news-in-compettions-navbar',
  templateUrl: './show-all-news-in-compettions-navbar.component.html',
  styleUrls: ['./show-all-news-in-compettions-navbar.component.scss']
})
export class ShowAllNewsInCompettionsNavbarComponent implements OnInit {
  compettion:string
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.compettion = this.route.snapshot.paramMap.get('compettion');
  }

}
