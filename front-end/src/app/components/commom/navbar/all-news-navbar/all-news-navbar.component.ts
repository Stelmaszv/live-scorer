import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LiveScorerHtppService } from '../../../../service/live-scorer-htpp.service'
import { Competition_Model } from '../../../../models/competitions'
@Component({
  selector: 'app-all-news-navbar',
  templateUrl: './all-news-navbar.component.html',
  styleUrls: ['./all-news-navbar.component.scss']
})
export class AllNewsNavbarComponent implements OnInit {
  category:string
  constructor(private route: ActivatedRoute,private Live_Scorer:LiveScorerHtppService) { }
  competitions:Competition_Model[]
  ngOnInit(): void {
    this.Get_Competitions()
    this.category = this.route.snapshot.paramMap.get('category');
  }
  private Get_Competitions(){
    this.Live_Scorer.Get_Competitions_Service().subscribe(competitions=>{
      this.competitions=competitions
    })
  }
}
