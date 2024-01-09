export class Identificacion {
    id: number;
    nombre: string;
    numeroIdentificacion: string;
    nombreCompleto: string;
    fechaCumpleanos: Date;
    fechaExpedicion: Date;
    nota: string;
    fechaExpiracionClave: Date;

    constructor(id: number, nombre: string, numeroIdentificacion: string, nombreCompleto: string, fechaCumpleanos: Date, fechaExpedicion: Date, nota: string, fechaExpiracionClave: Date) {
        this.id = id;
        this.nombre = nombre;
        this.numeroIdentificacion = numeroIdentificacion;
        this.nombreCompleto = nombreCompleto;
        this.fechaCumpleanos = fechaCumpleanos;
        this.fechaExpedicion = fechaExpedicion;
        this.nota = nota;
        this.fechaExpiracionClave = fechaExpiracionClave;
    }
}