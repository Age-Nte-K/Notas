const { LinkedList } = require('../DS');
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
// 7️⃣ ***** EJERCICIO 7 ***** - LinkedList.migrarStock() 7️⃣ 
//  La tienda de ropa necesita migrar sus datos de stock de una lista a un objeto.
//  Para esto deberás agregar al prototype de LinkedList el método 📦 migrarStock() 📦, el cual deberá retornar todos los valores almacenados
//  de la lista en un nuevo objeto con formato nombre: stock.
//
// EJEMPLOS:
//  Dada la siguiente lista:
//
// ({nombre: 'Camisetas', stock: 22}) ➡ ({nombre:'Pantalones', stock: 12}) ➡ ({nombre:'Zapatos', stock: 45}) ➡ ({nombre: 'Bufandas', stock: 12}) ➡ ({nombre: 'Sacos', stock: 4})
//
// lista.migrarStock() devuelve ➡
// {Camisetas: 22, Pantalones: 12, Zapatos: 45, Bufandas: 12, Sacos: 4}
//
//
// REQUISITOS:
// 🟢 Retornar un objeto con la prenda de ropa y su stock a modo de clave/valor mostrado en el ejemplo arriba

// 🟢 Si la lista está vacía retornar un mensaje que diga exactamente: "No hay stock para migrar"




//Recibo una LinkedList debo retornar un objeto con los valores de la lista en formato propiedad y valor

LinkedList.prototype.migrarStock = function() {


let obj = {}
let current = this.head;

if(!current) return "No hay stock para migrar";

while(current){

  let prop = current.value.nombre;       //Accedo a valor de nombre
  let value = current.value.stock;       //Accedo a valor de stock

  obj[prop] = value;                    //Asigno formato propiedad y valor
  current = current.next;               //Paso al siguiente nodo para seguir realizando la operacion
}

return obj;

}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
}; 