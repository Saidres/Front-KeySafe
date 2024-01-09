import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarjeta } from 'src/app/elementos/tarjeta';
import { ElementosService } from 'src/app/elementos/elementos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-tarjetas',
  templateUrl: './add-tarjetas.component.html',
  styleUrls: ['./add-tarjetas.component.css']
})
export class AddTarjetasComponent implements OnInit {

  tarjetaForm!: FormGroup;
  creandoTarjeta: boolean = false;

  constructor(private formBuilder: FormBuilder, private elementosService: ElementosService, private routerPath: Router) {}

  ngOnInit(): void {
    this.tarjetaForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      numero: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      titular: ['', [Validators.required, Validators.minLength(2)]],
      fechaVencimiento: ['', [Validators.required]],
      cvc: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      clave: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      direccion: ['', [Validators.required, Validators.minLength(2)]],
      nota: ['', [Validators.maxLength(500)]],
    });
  }

  crearTarjeta(): void {
    if (this.tarjetaForm.valid && !this.creandoTarjeta) {
      const tarjeta: Tarjeta = this.tarjetaForm.value;

      this.creandoTarjeta = true;
      this.elementosService.crearTarjeta(tarjeta).subscribe(
        (tarjetaCreada) => {
          alert('Tarjeta creada con éxito');
          this.tarjetaForm.reset();
          this.creandoTarjeta = false;
        },
        (error) => {
          console.error('Error al crear tarjeta:', error);
          this.creandoTarjeta = false;
        }
      );
    }
  }

  cancelar(){
    this.routerPath.navigate(['/tarjetas'])
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
  
    this.tarjetaForm.get('clave')?.setValue(claveAleatoria);
  }
  
  
}