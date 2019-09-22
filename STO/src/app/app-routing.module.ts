import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MarketComponent } from './market/market.component';
import { DetailsComponent } from './details/details.component';
import { AchatComponent } from './achat/achat.component';

const routes: Routes = [
  { path: 'token' , component: CreationComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'inscription' , component:InscriptionComponent},
  { path: 'market' , component:MarketComponent},
  { path: 'details' , component:DetailsComponent},
  { path: 'achat' , component:AchatComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
