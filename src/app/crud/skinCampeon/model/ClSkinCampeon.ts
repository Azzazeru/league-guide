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
    id: number;
    idCampeon: number;
    nombreSkin: string;
    calidad: string;
    precioRp: number;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.id = obj && obj.id || null
        this.idCampeon = obj && obj.idCampeon || null
        this.nombreSkin = obj && obj.nombreSkin || null
        this.calidad = obj && obj.calidad || null
        this.precioRp = obj && obj.precioRp || null
    }
}