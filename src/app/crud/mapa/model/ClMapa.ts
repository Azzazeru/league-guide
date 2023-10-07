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
    idMapa: number;
    nombre: string;
    modo: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idMapa = obj && obj.idMapa || null
        this.nombre = obj && obj.nombre || null
        this.modo = obj && obj.modo || null
    }
}