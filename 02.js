const Stack = require("../DS").Stack;
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 2️⃣ ***** EJERCICIO 2 STACK***** - apilarPantalones() 2️⃣ 
// 
// Un cliente ha solicitado pantalones de una talla determinada. Es necesario ir a buscar al inventario los pantalones y obtener
// las prendas solicitadas según su talla

// Para esto, tendrás que implementar la función 👖 apilarPantalones 👖, la cual recibirá por parámetros un arreglo
// conteniendo multiples tallas, además de un número de talla a solicitar. Deberás retornar un objeto, el cual contendrá una nueva pila
// con los pantalones solicitados y el arreglo anterior con los pantalones restantes

// EJEMPLOS:
// Dado el siguiente arreglo (INPUT): [37, 38, 38, 39, 41, 36, 41, 41, 37, 42]
// apilarPantalones(arreglo, 38) Devuelve (OUTPUT) ➡
// {
//   pantalonesEncontrados: Stack([38, 38]),
//   pantalonesRestantes: Stack([37, 39, 41, 36, 41, 41, 37, 42])
// }

// REQUISITOS:
//  🟢 Respetar el principio de LIFO que tienen los stacks
//  🟢 Retornar un objeto que contenga:
//  - Una propiedad "pantalonesEncontrados" que sea un stack que contenga los pantalones con la talla solicitada
//  - Una propiedad "pantalonesRestantes" que sea un stack que contenga los pantalones restantes
//  🟢 Retornar false si el stack viene vacío


//FUNCIONA

// function apilarPantalones(array, talla) {
//   // Tu código aquí:

//   let newArray= array.reverse()
//   let encontrados= new Stack();
//   let restantes= new Stack();
   
//   while(array.length > 0){

//     let pantalon = newArray.pop()

//     if(pantalon === talla){
//       encontrados.push(pantalon)
//     }

//     else{
//       restantes.push(pantalon)
//     }
//   }


//   let obj= {}
//   obj['pantalonesEncontrados']= encontrados
//   obj['pantalonesRestantes']= restantes

//   if(encontrados.size() === 0 && restantes.size() === 0){
//     return false
  
//   }else{
//     return obj
//   }
// };


//FUNCIONA

function apilarPantalones(arreglo, tallaSolicitada) {
  
  if (arreglo.length === 0) {
  return false;
  }
  
  const pantalonesEncontrados = new Stack();
  const pantalonesRestantes = new Stack();
  
  for (let i = 0; i < arreglo.length; i++) {
  const talla = arreglo[i];
  
  if (talla === tallaSolicitada) {
  pantalonesEncontrados.push(talla);
  
} else {
  pantalonesRestantes.push(talla);
  }
  }
  
  return {
  pantalonesEncontrados,
  pantalonesRestantes,
  };

  }
  
  // // Ejemplo de uso:
  // const arreglo = [37, 38, 38, 39, 41, 36, 41, 41, 37, 42];
  // const resultado = apilarPantalones(arreglo, 38);
  // console.log(resultado);



// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  apilarPantalones
};