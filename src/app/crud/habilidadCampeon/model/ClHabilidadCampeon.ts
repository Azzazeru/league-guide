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
    q: string;
    qDesc: string;
    w: string;
    wDesc: string;
    e: string;
    eDesc: string;
    r: string;
    rDesc: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.id = obj && obj.id || null
        this.idCampeon = obj && obj.idCampeon || null
        this.q = obj && obj.q || null
        this.w = obj && obj.w || null
        this.e = obj && obj.e || null
        this.r = obj && obj.r || null
        this.qDesc = obj && obj.qDesc || null
        this.wDesc = obj && obj.wDesc || null
        this.eDesc = obj && obj.eqDesc || null
        this.rDesc = obj && obj.rDesc || null
    }
}