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
    idItem: number;
    nombre: string;
    precio: number;
    categoria: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.idItem = obj && obj.idItem || null
        this.nombre = obj && obj.nombre || null
        this.precio = obj && obj.precio || null
        this.categoria = obj && obj.categoria || null
    }
}