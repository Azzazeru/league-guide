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
    nombre: string;
    titulo: string;
    
  
    // si no Inicializo los valores, da Error
      constructor(obj: any){
          this.id = obj && obj.id || null
          this.nombre = obj && obj.nombre || null
          this.titulo = obj && obj.descripcion || null
          
      }
  }