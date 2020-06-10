import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LiveScorerHtppService } from '../../../service/live-scorer-htpp.service'
import { Competition_Model } from '../../../models/competitions'

@Component({
  selector: 'app-show-all-news-in-compettions-navbar',
  templateUrl: './show-all-news-in-compettions-navbar.component.html',
  styleUrls: ['./show-all-news-in-compettions-navbar.component.scss']
})
export class ShowAllNewsInCompettionsNavbarComponent implements OnInit {
  compettion:string
  competition:Competition_Model[]
  constructor(private route: ActivatedRoute,private Live_Scorer:LiveScorerHtppService) { }

  ngOnInit(): void {
    this.compettion = this.route.snapshot.paramMap.get('compettion');
    this.Get_compettion()
  }
  private Get_compettion(){
    this.Live_Scorer.Get_Competitions_Service().subscribe(competition=>{
      this.competition=competition
    })
  }

}
