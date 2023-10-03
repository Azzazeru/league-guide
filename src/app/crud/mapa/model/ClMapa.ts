export class ClProducto {

  id: number;
  nombreMapa: string;
  descripcion: string;



    constructor(obj: any){
        this.id = obj && obj.id || null
        this.nombreMapa = obj && obj.nombreMapa || null
        this.descripcion = obj && obj.descripcion || null

    }
}
