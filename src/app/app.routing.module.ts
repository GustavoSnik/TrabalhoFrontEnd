import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { ParavoceComponent } from './pages/paravoce/paravoce.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SolucoesComponent } from './pages/solucoes/solucoes.component';
import { InteriordesignComponent } from './pages/interiordesign/interiordesign.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'paravoce', component: ParavoceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'solucoes', component: SolucoesComponent },
  { path: 'interiordesign', component: InteriordesignComponent },
  { path: 'contatos', component: ContatosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}


