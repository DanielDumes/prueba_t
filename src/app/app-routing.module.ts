import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PorquemoralesComponent } from './components/porquemorales/porquemorales.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { PlaneatuvisitaComponent } from './components/planeatuvisita/planeatuvisita.component';
import { NuestraparroquiaComponent } from './components/nuestraparroquia/nuestraparroquia.component';
import { RevistaComponent } from './components/revista/revista.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'porquemorales/:id', component: PorquemoralesComponent},
  {path: 'actividades/:id', component: ActividadesComponent},
  {path: 'planeatuvisita', component: PlaneatuvisitaComponent},
  {path: 'nuestraparroquia', component: NuestraparroquiaComponent},
  {path: 'revista', component: RevistaComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

