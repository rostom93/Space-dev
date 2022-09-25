import { Component, OnInit } from '@angular/core';
import { LanchesApiService } from 'src/app/services/lanches-api.service';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.component.html',
  styleUrls: ['./lanches.component.scss']
})
export class LanchesComponent implements OnInit {
  data : any
  lanchesId !:string;
  lanchesOnDemand : any;
  listOfAstro : any;
  x:number=0;
  y:number=9;
  searchText : any;

  constructor( private api : LanchesApiService) { }

  ngOnInit(): void {
    this.api.getLanches().subscribe(res=>{
      console.log(res);
      this.data = res.results;
      console.log(this.data);
      
    })
  }
  showDetails(id :string){
    this.lanchesId = "{"+id+"}"
    console.log(this.lanchesId);
    localStorage.setItem('Values', JSON.stringify(this.lanchesId));
    
    this.api.getLanchesById(this.lanchesId).subscribe((res: any)=>{
      this.lanchesOnDemand= res
    }
  )}

// quick pagination of the 50 elements
  showNext(){
    this.x=this.x+9;
    this.y=this.y+9
  }
  showPrevious(){
    if(this.x >0 && this.y> 0){
      this.x=this.x-9;
    this.y=this.y-9
    }
    
  }
}
