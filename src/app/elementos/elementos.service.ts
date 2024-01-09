import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tarjeta } from './tarjeta';
import { Secreto } from './secreto';
import { Login } from './login';
import { Identificacion } from './identificacion';


const API_URL = 'http://127.0.0.1:8000/api/gestionElementos/';
const API_URL_REP = 'http://127.0.0.1:8000/api/reporteDeSeguridad/';


@Injectable({
  providedIn: 'root'
})
export class ElementosService {
  
  constructor(private http: HttpClient) { }

  obtenerTarjetas(): Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(API_URL + 'tarjeta');
  }

  crearTarjeta(tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.post<Tarjeta>(API_URL + 'tarjeta', tarjeta)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear tarjeta:', error);
          return throwError('Error al crear tarjeta. Por favor, verifica los datos.');
        })
      );
  }

  eliminarTarjeta(id: number): Observable<void> {
    const url = `${API_URL}tarjeta-actualizada/${id}`;
    return this.http.delete<void>(url);
  }

  actualizarTarjeta(id: number, tarjeta: Tarjeta): Observable<Tarjeta> {
    const url = `${API_URL}tarjeta-actualizada/${id}`;
    return this.http.put<Tarjeta>(url, tarjeta)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al actualizar tarjeta:', error);
          return throwError('Error al actualizar tarjeta. Por favor, verifica los datos.');
        })
      );
  }
  
  

  obtenerSecretos(): Observable<Secreto[]> {
    return this.http.get<Secreto[]>(API_URL + 'secreto');
  }

  crearSecretos(secreto: Secreto): Observable<Secreto> {
    return this.http.post<Secreto>(API_URL + 'secreto', secreto)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear secreto:', error);
          return throwError('Error al crear secreto. Por favor, verifica los datos.');
        })
      );
  }

  obtenerLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(API_URL + 'login');
  }

  crearLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(API_URL + 'login', login)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear login:', error);
          return throwError('Error al crear login. Por favor, verifica los datos.');
        })
      );
  }

  obtenerIdentificacion(): Observable<Identificacion[]> {
    return this.http.get<Identificacion[]>(API_URL + 'identificacion');
  }

  crearIdentificacion(identificacion: Identificacion): Observable<Identificacion> {
    return this.http.post<Identificacion>(API_URL + 'identificacion', identificacion)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al crear identificación:', error);
          return throwError('Error al crear identificación. Por favor, verifica los datos.');
        })
      );
  }

  obtenerResultados(): Observable<any> {
    return this.http.get<any>(API_URL_REP + 'elementos-proximos-caducidad')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error al obtener resultados:', error);
          return throwError('Error al obtener resultados. Por favor, verifica la conexión o inténtalo más tarde.');
        })
      );
  }

  obtenerClavesDuplicadas(): Observable<number> {
    return this.http.get<number>(API_URL_REP + 'claves-duplicadas');
  }

  obtenerNivelSeguridad(): Observable<number> {
    return this.http.get<number>(API_URL_REP + 'nivel-seguridad');
  }
  
  
}

