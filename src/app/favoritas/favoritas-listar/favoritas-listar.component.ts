import { Component, OnInit } from '@angular/core';
import { ClaveFavorita } from '../claveFavorita';
import { Router } from '@angular/router';
import { FavoritasService } from '../favoritas.service';

@Component({
  selector: 'app-favoritas-listar',
  templateUrl: './favoritas-listar.component.html',
  styleUrls: ['./favoritas-listar.component.css']
})
export class FavoritasListarComponent implements OnInit {

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
    this.routerPath.navigate(['/añadir-claves-favoritas'])
  }

  salir(){
    this.routerPath.navigate([''])
  }


}
