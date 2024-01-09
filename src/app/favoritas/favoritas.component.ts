import { Component, OnInit } from '@angular/core';
import { ClaveFavorita } from './claveFavorita';
import { Router } from '@angular/router';
import { FavoritasService } from './favoritas.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent implements OnInit {

  
  a: any;
  claveFavorita:Array<ClaveFavorita>=[];


  constructor(private routerPath: Router, private favoritasService: FavoritasService){}
  ngOnInit(): void {
    this.obtenerClavesFavoritas();
  }

  obtenerClavesFavoritas(){
    this.favoritasService.obtenerClavesFavoritas().subscribe(
      ves => {
        this.claveFavorita=ves  
      }
    );
  }

  crearClaveFavorita(){
    this.routerPath.navigate(['/añadir-clave-favorita'])
  }

 

  salir(){
    this.routerPath.navigate([''])
  }


}