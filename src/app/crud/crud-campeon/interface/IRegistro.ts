// Definimos la Estructura de nuestro registro
// Todos los campos son obligatorios 
// al menos que se declare como opcional con signo de pregunta
export interface IRegistro{
    id?:String
    nombre:String
    titulo:String
    //Signo pregunta, permite que el campo sea opcional
    descripcion?:String  
    habilidadq?:String
    habilidadw?:String
    habilidade?:String
    habilidadr?:String
}
