import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritasComponent } from './favoritas.component';
import { AddFavoritasComponent } from './favoritas-listar/add-favoritas/add-favoritas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritasListarComponent } from './favoritas-listar/favoritas-listar.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [FavoritasComponent, AddFavoritasComponent, FavoritasListarComponent]
})
export class FavoritasModule { }
