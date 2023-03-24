// 3️⃣ ***** EJERCICIO 3 CLOSURES***** - chequearDisponibilidad() 3️⃣
// Implementar la función 🔍chequearDisponibilidad()🔍, la cuál recibirá inicialmente por parámetros
// un arreglo con prendas de ropa.

// Después podrá ser nuevamente invocada, recibiendo por parámetros un arreglo de las prendas disponibles para vender
// Debes retornar el mensaje correspondiente dependiendo de cuantas prendas hayan disponibles, o
// si no hay ninguna retornar "No se encontraron las prendas solicitadas"
//

// EJEMPLOS:
// Se solicitan las siguientes prendas: ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"]
// Y a continuación está disponible el siguiente stock: ["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]

// chequearDisponibilidad(prendas)(stock) Devuelve ➡
//  "2 de las 3 prendas solicitadas se encuentran en stock"
//
// O si probamos con otras prendas para solicitar: ["Pantalón Rojo", "Sweater Celeste"]
// chequearDisponibilidad(prendas2)(stock) Devuelve ➡
// "1 de las 2 prendas solicitadas se encuentran en stock"
//


// REQUISITOS:
//  🟢 Retornar un mensaje que indique la cantidad de prendas disponibles acorde al stock
// DEBERIA HACER UN CONTADOR CON LAS COINCIDENCIAS AL HACER LA COMPARACION ENTRE AMBOS ARRAYS,  "1 de las 3 prendas solicitadas se encuentran en el stock"

//  🟢 Retornar "No se encontraron las prendas solicitadas" si no se encontró disponibilidad
// SI NO HAY COINCIDENCIAS DEVOLVER EST MSJE, "No se encontraron las prendas solicitadas"

//  🟢 Retornar "Todas las prendas fueron encontradas" si las prendas solicitadas se encontraron, "Todas las prendas fueron encontradas"
// SI EL CONTADOR ES IGUAL AL .LENGTH DEL ARRAY DE PRENDASSOLICITADAS DEVOLVER ESTE MENSAJE
//
// ACLARACIÓN: Chequear el output de los test, para poder colocar los mensajes como corresponden!
//ropas es un array


function chequearDisponibilidad(ropa){        

 let counter = 0;

 let comparar = function(stock){

  for(let i=0;i<ropa.length;i++){
    for(let j=0;j<stock.length;j++){

    if(ropa[i] === stock[j]) 
    counter++;
 }
}

 if(counter === 0) return "No se encontraron las prendas solicitadas"
 if(counter === ropa.length) return "Todas las prendas fueron encontradas";
 if(counter !== ropa.length) return `${counter} de las ${ropa.length} prendas solicitadas se encuentran en el stock`

}

return comparar
}
      
console.log(chequearDisponibilidad(["Pantalón Rojo", "Gorra Azul"]) (["Pantalón Rojo", "Gorra Azul"]))
console.log(chequearDisponibilidad(["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"])(["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]))
console.log(chequearDisponibilidad(["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"])(["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]))




// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  chequearDisponibilidad,
};
 