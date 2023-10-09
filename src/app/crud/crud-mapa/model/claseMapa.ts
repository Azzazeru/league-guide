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
    idBaratijaVision: number;
    nombre: string;
<<<<<<<< HEAD:src/app/crud/crud-mapa/model/claseMapa.ts
    titulo: string;
========
    uso: string;
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/model/ClBaratijaVision.ts


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
<<<<<<<< HEAD:src/app/crud/crud-mapa/model/claseMapa.ts
        this.id = obj && obj.id || null
        this.nombre = obj && obj.nombre || null
        this.titulo = obj && obj.descripcion || null

========
        this.idBaratijaVision = obj && obj.idBaratijaVision || null
        this.nombre = obj && obj.nombre || null
        this.uso = obj && obj.uso || null
>>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be:src/app/crud/baratijaVision/model/ClBaratijaVision.ts
    }
}