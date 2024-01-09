import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { ElementosListComponent } from './elementos/elementos-list/elementos-list.component';
import { TarjetasComponent } from './elementos/elementos-list/tarjetas/tarjetas.component';
import { AddTarjetasComponent  } from './elementos/elementos-list/tarjetas/add-tarjetas/add-tarjetas.component';
import { FavoritasListarComponent } from './favoritas/favoritas-listar/favoritas-listar.component';
import { IdentificacionComponent } from './elementos/elementos-list/identificaciones/identificaciones.component';
import { LoginComponent } from './elementos/elementos-list/login/login.component';
import { SecretosComponent } from './elementos/elementos-list/secretos/SecretosComponent';
import { AddFavoritasComponent } from './favoritas/favoritas-listar/add-favoritas/add-favoritas.component';
import { AddSecretosComponent } from './elementos/elementos-list/secretos/add-secretos/add-secretos.component';
import { AddLoginComponent } from './elementos/elementos-list/login/add-login/add-login.component';
import { AddIdentificacionesComponent } from './elementos/elementos-list/identificaciones/add-identificaciones/add-identificaciones.component';
import { EditTarjetasComponent } from './elementos/elementos-list/tarjetas/edit-tarjetas/edit-tarjetas.component';
import { ReporteSeguridadComponent } from './elementos/elementos-list/reporteSeguridad/reporteSeguridad.component';

const routes: Routes = [
  {
    path: '',
    component: ElementosListComponent,
    pathMatch: 'full'
  },
  {
    path: 'tarjetas',
    component: TarjetasComponent
  },

  {
    path: 'identificaciones',
    component: IdentificacionComponent
  },

  {
    path: 'secretos',
    component: SecretosComponent
  },

 
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'añadir-identificacion',
    component: AddIdentificacionesComponent
  },

  {
    path: 'añadir-login',
    component: AddLoginComponent
  },

  {
    path: 'añadir-tarjetas',
    component: AddTarjetasComponent
  },

  {
    path: 'claves-favoritas',
    component: FavoritasListarComponent
  },

  {
    path:'añadir-claves-favoritas',
    component: AddFavoritasComponent
  },

  {
    path:'añadir-secretos',
    component: AddSecretosComponent
  },

  { 
    path: 'tarjetas/edit/:id', 
    component: EditTarjetasComponent 
  },

  { 
    path: 'reporte-de-seguridad', 
    component: ReporteSeguridadComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Ruta actual:', event.url);
      }
    });
  }
}
