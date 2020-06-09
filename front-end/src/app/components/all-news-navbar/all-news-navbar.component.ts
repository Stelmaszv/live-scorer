import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-all-news-navbar',
  templateUrl: './all-news-navbar.component.html',
  styleUrls: ['./all-news-navbar.component.scss']
})
export class AllNewsNavbarComponent implements OnInit {
  category:string
  constructor(private route: ActivatedRoute) { }
  competitions
  ngOnInit(): void {
    this.sort_ligs()
    this.get_ligs()
    this.category = this.route.snapshot.paramMap.get('category');
  }
  private sort_ligs(){
  }
  private get_ligs(){
    this.competitions=['BBL','La liga','Ekstraklasa','PREMIERSHIP','PRIMERA DIVISION']
  }

}
