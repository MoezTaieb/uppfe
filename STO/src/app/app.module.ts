import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreationComponent } from './creation/creation.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MarketComponent } from './market/market.component';
import { DetailsComponent } from './details/details.component';
import  { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AchatComponent } from './achat/achat.component';


@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    LoginComponent,
    InscriptionComponent,
    NavbarComponent,
    MarketComponent,
    DetailsComponent,
    AchatComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
