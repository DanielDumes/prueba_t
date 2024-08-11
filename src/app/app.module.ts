import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PorquemoralesComponent } from './components/porquemorales/porquemorales.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { PlaneatuvisitaComponent } from './components/planeatuvisita/planeatuvisita.component';
import { NuestraparroquiaComponent } from './components/nuestraparroquia/nuestraparroquia.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwiperModule } from 'swiper/types';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PorquemoralesComponent,
    ActividadesComponent,
    PlaneatuvisitaComponent,
    NuestraparroquiaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
