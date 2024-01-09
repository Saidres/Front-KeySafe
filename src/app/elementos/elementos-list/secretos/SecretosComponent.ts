import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from '../../elementos.service';
import { Secreto } from '../../secreto';




@Component({
    selector: 'app-secretos',
    templateUrl: './secretos.component.html',
    styleUrls: ['./secretos.component.css']
})
export class SecretosComponent implements OnInit {
    a: any;
    secreto: Array<Secreto> = [];


    constructor(private routerPath: Router, private elementosService: ElementosService){}
  ngOnInit(): void {
    this.obtenerSecretos();
  }

  obtenerSecretos(): void {
    this.elementosService.obtenerSecretos().subscribe(
      (secretos: Secreto[]) => {
        this.secreto = secretos;
      }
    );
  }

  anadirSecreto(){
    this.routerPath.navigate(['/añadir-secretos'])
  }

  salir(){
    this.routerPath.navigate([''])
  }


}