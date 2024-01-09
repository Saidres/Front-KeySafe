export class Login {
    id: number;
    nombre: string;
    nombreUsuario: string;
    correo: string;
    clave: string;
    nota: string;
    fechaExpiracionClave: Date;

    constructor(id: number, nombre: string, nombreUsuario: string, correo: string, clave: string, nota: string, fechaExpiracionClave: Date) {
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.correo = correo;
        this.clave = clave;
        this.nota = nota;
        this.fechaExpiracionClave = fechaExpiracionClave;
    }
}