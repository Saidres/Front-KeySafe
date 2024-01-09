import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/elementos/login'; 
import { ElementosService } from 'src/app/elementos/elementos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {

  loginForm!: FormGroup;
  creandoLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private elementosService: ElementosService, private routerPath: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.minLength(2)]],
      clave: ['', [Validators.required, Validators.minLength(2)]],
      nota: ['', [Validators.maxLength(500)]],
    });
  }

  crearLogin(): void {
    if (this.loginForm.valid && !this.creandoLogin) {
      const login: Login = this.loginForm.value;

      this.creandoLogin = true;
      this.elementosService.crearLogin(login).subscribe(
        (loginCreado) => {
          alert('Login creado con éxito');
          this.loginForm.reset();
          this.creandoLogin = false;
        },
        (error) => {
          console.error('Error al crear login:', error);
          this.creandoLogin = false;
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
  
    this.loginForm.get('clave')?.setValue(claveAleatoria);
  }
  
  
}