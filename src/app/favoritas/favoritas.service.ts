import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClaveFavorita } from './claveFavorita';

const API_URL = 'http://127.0.0.1:8000/api/clavesFavoritas/';

@Injectable({
  providedIn: 'root'
})
export class FavoritasService {

  constructor(private http: HttpClient) { }

  obtenerClavesFavoritas(): Observable<ClaveFavorita[]> {
    return this.http.get<ClaveFavorita[]>(API_URL + 'clavesFavoritas');
  }

  crearClaveFavorita(claveFavorita: ClaveFavorita): Observable<ClaveFavorita> {
    return this.http.post<ClaveFavorita>(API_URL + 'clavesFavoritas', claveFavorita)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error en clave favorita:', error);
          return throwError('Error en clave favorita. Por favor, verifica los datos.');
        })
      );
  }

  
}