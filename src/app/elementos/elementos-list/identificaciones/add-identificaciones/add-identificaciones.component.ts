import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Identificacion } from 'src/app/elementos/identificacion';
import { ElementosService } from 'src/app/elementos/elementos.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-identificaciones',
  templateUrl: './add-identificaciones.component.html',
  styleUrls: ['./add-identificaciones.component.css']
})
export class AddIdentificacionesComponent implements OnInit {

  identificacionForm!: FormGroup;
  creandoIdentificacion: boolean = false;

  constructor(private formBuilder: FormBuilder, private elementosService: ElementosService, private routerPath: Router) { }

  ngOnInit() {
    this.identificacionForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      numeroIdentificacion: ['', [Validators.required, Validators.minLength(2)]],
      nombreCompleto: ['', [Validators.required, Validators.minLength(2)]],
      fechaCumpleaños: ['', [Validators.required, Validators.minLength(2)]],
      fechaExpedicion: ['', [Validators.maxLength(500)]],
      nota: ['', [Validators.maxLength(500)]],
      fechaExpedicionClave: ['', [Validators.maxLength(500)]],
    });
  }

  cancelar(){
    this.routerPath.navigate(['/identificaciones'])
  }

  crearIdentificacion(): void {
    if (this.identificacionForm.valid && !this.creandoIdentificacion) {
      const identificacion: Identificacion = this.identificacionForm.value;

      this.creandoIdentificacion = true;
      this.elementosService.crearIdentificacion(identificacion).subscribe(
        (loginCreado) => {
          alert('Login creado con éxito');
          this.identificacionForm.reset();
          this.creandoIdentificacion = false;
        },
        (error) => {
          console.error('Error al crear login:', error);
          this.creandoIdentificacion = false;
        }
      );
    }
  }

  generarClaveAleatoria(): void {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let claveAleatoria = '';
  
    claveAleatoria += '0123456789'.charAt(Math.floor(Math.random() * 10));
  
    for (let i = 0; i < 7; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      claveAleatoria += caracteres.charAt(indice);
    }
  
    claveAleatoria = claveAleatoria.split('').sort(() => Math.random() - 0.5).join('');
  
    this.identificacionForm.get('clave')?.setValue(claveAleatoria);
  }

}
