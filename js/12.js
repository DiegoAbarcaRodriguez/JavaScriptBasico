// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze .seal (Object.freeze no permite modificar las propiedades existentes, seal si permite modificar y eliminar las propiedades existentes)

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);