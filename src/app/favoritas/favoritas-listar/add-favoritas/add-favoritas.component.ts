import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaveFavorita } from '../../claveFavorita';
import { FavoritasService } from '../../favoritas.service';

@Component({
  selector: 'app-add-favoritas',
  templateUrl: './add-favoritas.component.html',
  styleUrls: ['./add-favoritas.component.css']
})
export class AddFavoritasComponent implements OnInit {


  favoritasForm!: FormGroup;
  creandoFavoritas: boolean = false;

  constructor(private formBuilder: FormBuilder, private favoritasService: FavoritasService, private routerPath: Router) {}

  ngOnInit(): void {
    this.favoritasForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      clave: ['', [Validators.required, Validators.minLength(2)]],   
      pista: ['', [Validators.maxLength(500)]],
    });
  }

  crearFavorita(): void {
    if (this.favoritasForm.valid && !this.creandoFavoritas) {
      const claveFavorita: ClaveFavorita = this.favoritasForm.value;

      this.creandoFavoritas = true;
      this.favoritasService.crearClaveFavorita(claveFavorita).subscribe(
        (favoritaCreada) => {
          alert('clave favorita creada con éxito');
          this.favoritasForm.reset();
          this.creandoFavoritas = false;
        },
        (error) => {
          console.error('Error al crear clave favorita:', error);
          this.creandoFavoritas = false;
        }
      );
    }
  }

  cancelar(){
    this.routerPath.navigate(['/claves-favoritas'])
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
  
    this.favoritasForm.get('clave')?.setValue(claveAleatoria);
  }
  
  
}
