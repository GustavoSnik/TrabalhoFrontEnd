import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'materialize-css';

import { MaterializeModule } from 'angular2-materialize';
import {MaterializeDirective} from "angular2-materialize";


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SolucoesComponent } from './pages/solucoes/solucoes.component';
import { InteriordesignComponent } from './pages/interiordesign/interiordesign.component';
import { ParavoceComponent } from './pages/paravoce/paravoce.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

import { AppRoutingModule } from './app.routing.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SolucoesComponent,
    InteriordesignComponent,
    ParavoceComponent,
    PortfolioComponent,
    ContatosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Marcenaria Venusiana';

  ngOnInit(){
  
  }

}


