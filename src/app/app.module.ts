import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementosModule } from './elementos/elementos.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritasModule } from './favoritas/favoritas.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ElementosModule,
    ReactiveFormsModule,
    FavoritasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
