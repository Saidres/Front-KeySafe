import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from '../../elementos.service';

@Component({
  selector: 'app-reporteSeguridad',
  templateUrl: './reporteSeguridad.component.html',
  styleUrls: ['./reporteSeguridad.component.css']
})


export class ReporteSeguridadComponent implements OnInit {
  resultados: any = {};
  clavesDuplicadas: number | undefined;
  nivelSeguridad: number | undefined;



  constructor(private routerPath: Router, private elementosService: ElementosService) { }

  ngOnInit() {
    this.obtenerResultados();
    this.obtenerDatos();
  }

  obtenerResultados() {
    this.elementosService.obtenerResultados().subscribe(
      (data: any) => {
        this.resultados = data;
      },
      (error) => {
        console.error('Error al obtener resultados:', error);
      }
    );
  }

  obtenerDatos() {
    // Obtener cantidad de claves duplicadas
    this.elementosService.obtenerClavesDuplicadas().subscribe(
      (cantidad: number) => {
        this.clavesDuplicadas = cantidad;
      },
      (error) => {
        console.error('Error al obtener claves duplicadas:', error);
      }
    );
  }

  obtenerDatosNivel() {
    // Obtener nivel de seguridad
    this.elementosService.obtenerNivelSeguridad().subscribe(
      (nivel: number) => {
        this.nivelSeguridad = nivel;
      },
      (error) => {
        console.error('Error al obtener nivel de seguridad:', error);
      }
    );
  }

  salir() {
    this.routerPath.navigate(['']);
  }
}
