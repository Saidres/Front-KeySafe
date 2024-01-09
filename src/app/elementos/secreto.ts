export class Secreto {
    id: number;
    nombre: string;
    secreto: string;
    clave: string;
    nota: string;
    fechaExpiracionClave: Date;

    constructor(id: number, nombre: string, secreto: string, clave: string, nota: string, fechaExpiracionClave: Date) {
        this.id = id;
        this.nombre = nombre;
        this.secreto = secreto;
        this.clave = clave;
        this.nota = nota;
        this.fechaExpiracionClave = fechaExpiracionClave;
    }
}