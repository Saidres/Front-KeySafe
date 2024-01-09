import { Component, OnInit } from '@angular/core';
import { Elemento } from '../elemento';
import { ElementosService } from '../elementos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elementos-list',
  templateUrl: './elementos-list.component.html',
  styleUrls: ['./elementos-list.component.css']
})

export class ElementosListComponent implements OnInit{

  constructor(private routerPath: Router){}
  ngOnInit(): void {
    
  }

  irTarjetas(){
    this.routerPath.navigate(['/tarjetas'])
  }

  irClavesFavoritas(){
    this.routerPath.navigate(['/claves-favoritas'])
  }

  irSecretos(){
    this.routerPath.navigate(['/secretos'])
  }

  irIdentificaciones(){
    this.routerPath.navigate(['/identificaciones'])
  }

  irLogin(){
    this.routerPath.navigate(['/login'])
  }

  irReporteSeguridad(){
    this.routerPath.navigate(['/reporte-de-seguridad'])
  }

  
}
