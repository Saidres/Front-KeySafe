export class Tarjeta {
    id: number;
    nombre: string;
    numero: string;
    titular: string;
    fechaVencimiento: string;
    cvc: string;
    clave: string;
    telefono: string;
    direccion: string;
    nota: string;
    fechaExpiracionClave: Date;

    constructor(id: number, nombre: string, numero: string, titular: string, fechaVencimiento: string, cvc: string, clave: string, telefono: string, direccion: string, nota: string, fechaExpiracionClave: Date) {
        this.id = id;
        this.nombre = nombre;
        this.numero = numero;
        this.titular = titular;
        this.fechaVencimiento = fechaVencimiento;
        this.cvc = cvc;
        this.clave = clave;
        this.telefono = telefono;
        this.direccion = direccion;
        this.nota = nota;
        this.fechaExpiracionClave = fechaExpiracionClave;
    }
}