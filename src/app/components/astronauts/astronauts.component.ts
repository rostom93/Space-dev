import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanchesApiService } from 'src/app/services/lanches-api.service';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.scss']
})
export class AstronautsComponent implements OnInit {
  astroUrl : string = ""
  listOfAstro: any
  constructor(private api: LanchesApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAstronautList().subscribe((res) => {
      this.listOfAstro = res.results;
      console.log(this.listOfAstro);

    })
  }
  navigate(url : string): void {
    this.astroUrl = url;
    localStorage.setItem('url', JSON.stringify(url));
    console.log(this.astroUrl);
    this.router.navigateByUrl("/astro");
    
  }

}
