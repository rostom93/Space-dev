import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanchesApiService {

  constructor( private http: HttpClient) { }
  getLanches() {
    let param = '?limit=50&offset=200'
    return this.http.get<any>("https://ll.thespacedevs.com/2.2.0/launch/upcoming" + param).pipe(map((res: any) => {
      return res;
      console.log(res);
      

    }))
  }

  //get all the agencies 
  getAllAgencies(){
    return this.http.get<any>("https://ll.thespacedevs.com/2.2.0/agencies").pipe(map((res: any) => {
      return res;
    }))
  }

  //get the list of astronauts 
  getAstronautList() {
    let param = '?limit=50&offset=200'
    return this.http.get<any>("https://ll.thespacedevs.com/2.2.0/astronaut" + param).pipe(map((res: any) => {
      return res;
    }))
  }
  getAstroById(url : string) {
    return this.http.get<any>(url).pipe(map((res: any) => {
      return res;
    }))
  }
  // get launch by id 
  public getLanchesById(lanchesId: string): any {
    return this.http.get<any>("https://ll.thespacedevs.com/2.2.0/launch/" + lanchesId).pipe(map((res: any) => {
      return res;
    }));
  }
  // get agencies informations 
  getAgencieInfo(apiUrl : string):any{
    return this.http.get<any>(apiUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
  getAstroAgency(url : string):any{
    return this.http.get<any>(url).pipe(map((res:any)=>{
      return res;
    }))
  }

}
