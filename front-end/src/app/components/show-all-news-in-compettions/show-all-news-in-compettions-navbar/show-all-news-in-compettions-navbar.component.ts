import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LiveScorerHtppService } from '../../../service/live-scorer-htpp.service'
import { Competition_get_Model } from '../../../models/competitions_get'

@Component({
  selector: 'app-show-all-news-in-compettions-navbar',
  templateUrl: './show-all-news-in-compettions-navbar.component.html',
  styleUrls: ['./show-all-news-in-compettions-navbar.component.scss']
})
export class ShowAllNewsInCompettionsNavbarComponent implements OnInit {
  compettion_name:string
  competition_data:Competition_get_Model
  constructor(private route: ActivatedRoute,private Live_Scorer:LiveScorerHtppService) { }

  ngOnInit(): void {
    this.compettion_name = this.route.snapshot.paramMap.get('compettion');
    this.Get_compettion()
  }
  private Get_compettion(){
    this.Live_Scorer.Get_Competition_by_name(this.compettion_name).subscribe(competition=>{
      this.competition_data=competition
    })
  }

}
