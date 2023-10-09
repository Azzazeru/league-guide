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
    idBotin: number;
    nombre: string;
    origen: string;
    precio: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idBotin = obj && obj.idBotin || null
        this.nombre = obj && obj.nombre || null
        this.origen = obj && obj.origen || null
        this.precio = obj && obj.precio || null
    }
}