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
    correo: string;
    usuario: string;
    contrasenia: string;
    servidor: string;


    // si no Inicializo los valores, da Error
    constructor(obj: any) {
        this.id = obj && obj.id || null
        this.correo = obj && obj.correo || null
        this.usuario = obj && obj.usuario || null
        this.contrasenia = obj && obj.contrasenia || null
        this.servidor = obj && obj.servidor || null
    }
}