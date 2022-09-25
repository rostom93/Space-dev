import { Component, OnInit } from '@angular/core';
import { LanchesApiService } from 'src/app/services/lanches-api.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-lanches-details',
  templateUrl: './lanches-details.component.html',
  styleUrls: ['./lanches-details.component.scss']
})
export class LanchesDetailsComponent implements OnInit {
  id: string=""
  lanchesId: string=""
  apiurl: string=""
  lanchesOnDemand : any
  agencieInfo : any
  showmore : boolean = false
  constructor(private api: LanchesApiService,private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.id = JSON.parse(`${localStorage.getItem('Values')}`);
    this.lanchesId = "{"+this.id+"}"
    // get lanches by id and more informations 
    this.api.getLanchesById(this.lanchesId).subscribe((res : any)=>{
      this.lanchesOnDemand = res
      console.log(this.lanchesOnDemand);
    })
  }
  public showMore(){
    this.showmore = !this.showmore
  }

  showAgencieDetail(){

    this.apiurl = this.lanchesOnDemand.launch_service_provider.url
    console.log(this.apiurl);
    
    this.api.getAgencieInfo(this.apiurl).subscribe((res : any)=>{
      console.log(res);
      this.agencieInfo = res
      
    })
  }
  

}
