import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiveScorerHtppService } from '../../../../service/live-scorer-htpp.service'
import { Competition_get_Model } from '../../../../models/competitions_get'
import { Competition_Model } from '../../../../models/competitions'

@Component({
  selector: 'app-show-all-news-in-compettions-navbar',
  templateUrl: './show-all-news-in-compettions-navbar.component.html',
  styleUrls: ['./show-all-news-in-compettions-navbar.component.scss']
})
export class ShowAllNewsInCompettionsNavbarComponent implements OnInit {
  @Input() id=0;
  Competitions:Competition_Model[];
  compettion_name:string;
  competition_data:Competition_get_Model

  constructor(private route: ActivatedRoute,private Live_Scorer:LiveScorerHtppService) { }

  ngOnInit(): void {

    this.compettion_name=(this.route.snapshot.paramMap.get('compettion') === null) ? 'none' : this.route.snapshot.paramMap.get('compettion');
    this.Get_compettion()
  }

  private Get_compettion() : void
  {
    this.Live_Scorer.Get_Competition(this.id,this.compettion_name).subscribe(competition=>{
      this.competition_data=competition
      this.Get_Competitions_from_Country(this.competition_data.Country)
    })
  }
  private Get_Competitions_from_Country(Country:string){
    this.Live_Scorer.Get_Competitions_from_Country_service(Country).subscribe(Competitions=>{
      this.Competitions=Competitions
    })
  }

}
