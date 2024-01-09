import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from 'src/app/elementos/elementos.service';
import { Tarjeta } from 'src/app/elementos/tarjeta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-tarjetas',
  templateUrl: './edit-tarjetas.component.html',
  styleUrls: ['./edit-tarjetas.component.css']
})
export class EditTarjetasComponent implements OnInit {

  tarjetaId: number | undefined;
  tarjeta:Array<Tarjeta>=[];


  constructor(
    private elementosService: ElementosService,
    private routerPath: Router
  ) {}

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    this.elementosService.obtenerTarjetas().subscribe(
      ves => {
        this.tarjeta=ves  
      }
    );
  }

  actualizarTarjeta(id: number, nuevaTarjeta: Tarjeta): void {
    this.elementosService.actualizarTarjeta(id, nuevaTarjeta).subscribe(
      (tarjetaActualizada) => {
        this.obtenerTarjetas();
      },
      (error) => {
        console.error('Error al actualizar tarjeta:', error);
      }
    );
  }
}
