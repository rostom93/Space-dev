import { Component, OnInit } from '@angular/core';
import { LanchesApiService } from 'src/app/services/lanches-api.service';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss']
})
export class AgenciesComponent implements OnInit {
  listOfAgencies: any
  constructor(private api: LanchesApiService) { }

  ngOnInit(): void {
    this.api.getAllAgencies().subscribe((res) => {
      this.listOfAgencies = res.results
    })
  }

}
