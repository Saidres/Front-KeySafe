import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Secreto } from 'src/app/elementos/secreto';
import { ElementosService } from 'src/app/elementos/elementos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-secretos',
  templateUrl: './add-secretos.component.html',
  styleUrls: ['./add-secretos.component.css']
})
export class AddSecretosComponent implements OnInit {

  secretoForm!: FormGroup;
  creandoSecreto: boolean = false;

  constructor(private formBuilder: FormBuilder, private elementosService: ElementosService, private routerPath: Router) {}

  ngOnInit(): void {
    this.secretoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      secreto: ['', [Validators.required, Validators.minLength(2)]],
      clave: ['', [Validators.required, Validators.minLength(2)]],
      nota: ['', [Validators.maxLength(500)]],
    });
  }

  crearSecreto(): void {
    if (this.secretoForm.valid && !this.creandoSecreto) {
      const secreto: Secreto = this.secretoForm.value;

      this.creandoSecreto = true;
      this.elementosService.crearSecretos(secreto).subscribe(
        (secretoCreado): void => {
          alert('Secreto creado con éxito');
          this.secretoForm.reset();
          this.creandoSecreto = false;
        },
        (error) => {
          console.error('Error al crear secreto:', error);
          this.creandoSecreto = false;
        }
      );
    }
  }

  cancelar(){
    this.routerPath.navigate(['/secretos'])
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
  
    this.secretoForm.get('clave')?.setValue(claveAleatoria);
  }
  
  
}