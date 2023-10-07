// export class ClProducto {
//   id: number;
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   cantidad: number;
//   fecha: Date;
//     constructor(values: Object= {}){
//         Object.assign(this, values);
//     }
// }
export class ClProducto {
    // si no Inicializo los valores, da Error
    // Por eso es el constructor por obligación
    idModo: number;
    nombre: string;
    idMapa: number;

    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idModo = obj && obj.idModo || null
        this.nombre = obj && obj.nombre || null
        this.idMapa = obj && obj.idMapa || null
    }
}