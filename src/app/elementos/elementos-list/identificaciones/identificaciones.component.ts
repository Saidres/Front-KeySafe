import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from '../../elementos.service';
import { Identificacion } from '../../identificacion';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificaciones.component.html',
  styleUrls: ['./identificaciones.component.css']
})
export class IdentificacionComponent implements OnInit {
  a: any;
  identificacion: Array<Identificacion> = [];


  constructor(private routerPath: Router, private elementosService: ElementosService){}
ngOnInit(): void {
  this.obtenerIdentificacion();
}

obtenerIdentificacion(): void {
  this.elementosService.obtenerIdentificacion().subscribe(
    (identificacion: Identificacion[]) => {
      this.identificacion = identificacion;
    }
  );
}

anadirIdentificacion(){
  this.routerPath.navigate(['/añadir-identificacion'])
}

salir(){
  this.routerPath.navigate([''])
}


}