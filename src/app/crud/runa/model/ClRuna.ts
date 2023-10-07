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
    idRuna: number;
    nombre: string;
    categoria: string;
    tipo: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idRuna = obj && obj.idRuna || null
        this.nombre = obj && obj.nombre || null
        this.categoria = obj && obj.categoria || null
        this.tipo = obj && obj.tipo || null
    }
}