// Definimos la Estructura de nuestro registro
// Todos los campos son obligatorios 
// al menos que se declare como opcional con signo de pregunta
export interface IRegistro{
    id?:String  // Signo de pregunta al revés ****
    titulo:String
    link:String
}