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
    idDivision: number;
    nombre: string;
    nivel: number;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idDivision = obj && obj.idDivision || null
        this.nombre = obj && obj.nombre || null
        this.nivel = obj && obj.nivel || null
    }
}