import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../../tarjeta';
import { Router } from '@angular/router';
import { ElementosService } from '../../elementos.service';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit{
a: any;
  tarjeta:Array<Tarjeta>=[];
  tarjetaSeleccionada: Tarjeta | null = null;



  constructor(private routerPath: Router, private elementosService: ElementosService){}
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

  anadirTarjetas(){
    this.routerPath.navigate(['/añadir-tarjetas'])
  }

  salir(){
    this.routerPath.navigate([''])
  }

  eliminarTarjeta(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarjeta?')) {
      this.elementosService.eliminarTarjeta(id).subscribe(
        () => {
          // La tarjeta se eliminó correctamente, puedes realizar acciones adicionales si es necesario.
          // Por ejemplo, volver a cargar la lista de tarjetas.
          this.obtenerTarjetas();
        },
        (error) => {
          console.error('Error al eliminar tarjeta:', error);
          // Maneja el error como consideres necesario.
        }
      );
    }
  }

  editarTarjeta(id: number){
    this.routerPath.navigate(['tarjetas/edit/:id'])
  }

  seleccionarTarjeta(tarjeta: Tarjeta) {
    this.tarjetaSeleccionada = tarjeta;
  }

  

}
