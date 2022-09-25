import { Component, OnInit } from '@angular/core';
import { LanchesApiService } from 'src/app/services/lanches-api.service';

@Component({
  selector: 'app-astro-details',
  templateUrl: './astro-details.component.html',
  styleUrls: ['./astro-details.component.scss']
})
export class AstroDetailsComponent implements OnInit {
  apiUrl = ""
  astroOnDemand : any;
  astroAgencyUrl : string ="";
  astroAgencyInfo : any
  constructor(private api: LanchesApiService) { }

  ngOnInit(): void {
    this.apiUrl = JSON.parse(`${localStorage.getItem('url')}`);
    this.api.getAstroById(this.apiUrl).subscribe((res)=>{
      this.astroOnDemand= res
      console.log(this.astroOnDemand);
      this.astroAgencyUrl = this.astroOnDemand.agency.url
      this.api.getAstroAgency(this.astroAgencyUrl).subscribe((data : any)=>{
        this.astroAgencyInfo = data;
        console.log(this.astroAgencyInfo);
        
      })
      
    })
  }

}
