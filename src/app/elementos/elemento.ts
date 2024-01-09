export class Elemento{
    placa:string;
    marca:string;
    color_vehiculo:string;
    modelo:number;
    
    public constructor(placa: string, marca: string, color_vehiculo: string, modelo: number){
        this.placa= placa;
        this.marca= marca;

        this.color_vehiculo= color_vehiculo;

        this.modelo= modelo;
    }

}