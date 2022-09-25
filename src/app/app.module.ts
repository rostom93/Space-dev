import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LanchesComponent } from './components/lanches/lanches.component';
import { LanchesDetailsComponent } from './components/lanches-details/lanches-details.component';
import { AstronautsComponent } from './components/astronauts/astronauts.component';
import { AstroDetailsComponent } from './components/astro-details/astro-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AgenciesComponent } from './components/agencies/agencies.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanchesComponent,
    LanchesDetailsComponent,
    AstronautsComponent,
    AstroDetailsComponent,
    AgenciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
