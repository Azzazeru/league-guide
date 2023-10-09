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
    idCampeon: number;
    nombre: string;
    uso: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idCampeon = obj && obj.idCampeon || null
        this.nombre = obj && obj.nombre || null
        this.uso = obj && obj.uso || null
    }
}