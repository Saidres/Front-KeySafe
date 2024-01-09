import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from '../../elementos.service';
import { Login } from '../../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a: any;
  login: Array<Login> = [];


  constructor(private routerPath: Router, private elementosService: ElementosService){}
ngOnInit(): void {
  this.obtenerLogin();
}

obtenerLogin(): void {
  this.elementosService.obtenerLogin().subscribe(
    (login: Login[]) => {
      this.login = login;
    }
  );
}

anadirLogin(){
  this.routerPath.navigate(['/añadir-login'])
}

salir(){
  this.routerPath.navigate([''])
}


}