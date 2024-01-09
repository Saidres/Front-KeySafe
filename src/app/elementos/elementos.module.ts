import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementosComponent } from './elementos.component';
import { ElementosListComponent } from './elementos-list/elementos-list.component';
import { TarjetasComponent } from './elementos-list/tarjetas/tarjetas.component';
import { AddTarjetasComponent } from './elementos-list/tarjetas/add-tarjetas/add-tarjetas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IdentificacionComponent } from './elementos-list/identificaciones/identificaciones.component';
import { SecretosComponent } from './elementos-list/secretos/SecretosComponent';
import { LoginComponent } from './elementos-list/login/login.component';
import { AddSecretosComponent } from './elementos-list/secretos/add-secretos/add-secretos.component';
import { AddLoginComponent } from './elementos-list/login/add-login/add-login.component';
import { AddIdentificacionesComponent } from './elementos-list/identificaciones/add-identificaciones/add-identificaciones.component';
import { EditTarjetasComponent } from './elementos-list/tarjetas/edit-tarjetas/edit-tarjetas.component';
import { ReporteSeguridadComponent } from './elementos-list/reporteSeguridad/reporteSeguridad.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ElementosComponent, ElementosListComponent, TarjetasComponent, AddTarjetasComponent, IdentificacionComponent, SecretosComponent, LoginComponent, AddSecretosComponent, AddLoginComponent, AddIdentificacionesComponent, EditTarjetasComponent, ReporteSeguridadComponent],
  exports: [ElementosListComponent]
})
export class ElementosModule { }
