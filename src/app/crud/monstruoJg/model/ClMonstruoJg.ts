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
    idMonstruoJg: number;
    nombre: string;
    bonus: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idMonstruoJg = obj && obj.idMonstruoJg || null
        this.nombre = obj && obj.nombre || null
        this.bonus = obj && obj.bonus || null
    }
}