import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { AstroDetailsComponent } from './components/astro-details/astro-details.component';
import { AstronautsComponent } from './components/astronauts/astronauts.component';
import { HomeComponent } from './components/home/home.component';
import { LanchesDetailsComponent } from './components/lanches-details/lanches-details.component';
import { LanchesComponent } from './components/lanches/lanches.component';

const routes: Routes = [
  {path : "" , component : LanchesComponent},
  {path : "lanches-details" ,component:LanchesDetailsComponent},
  {path : "astronauts" ,component:AstronautsComponent},
  {path : "astro" ,component:AstroDetailsComponent},
  {path : "agencies" ,component:AgenciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
