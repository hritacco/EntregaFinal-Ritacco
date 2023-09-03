let carrito = [];
let carritoLS = JSON.stringify(localStorage.getItem('listaProductos')) || [];

if (carritoLS){
    carrito = carritoLS;
}
const arregloDeObjetos = [
    {id: 1, nombre: 'Computadora', precio: 100, categoria: 'Electronica'},
    {id: 2, nombre: 'Camisa', precio: 10, categoria: 'Ropa'},
    {id: 3, nombre: 'Velador', precio: 15, categoria: 'Hogar'},
    {id: 4, nombre: 'Teclado', precio: 59, categoria: 'Electronica'},
    {id: 5, nombre: 'pantalon', precio: 5, categoria: 'Ropa'},
    {id: 6, nombre: 'silla', precio: 105, categoria: 'Hogar'},
    {id: 7, nombre: 'monitor', precio: 150, categoria: 'Electronica'},
    {id: 8, nombre: 'Gorra', precio: 1, categoria: 'Ropa'},
    {id: 9, nombre: 'Mesa', precio: 10, categoria: 'Hogar'},
    {id: 10, nombre: 'Teléfono', precio: 110, categoria: 'Electronica'},
];



const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

guardarLocal("listaProductos", JSON.stringify(arregloDeObjetos));

//Local y sesion storage
//Es un metodo ----> localStorage.setItem(key, value)

// key --> Nombre para identificar el elemento, el valor lo pone el programador
// value --> valor/contenido

localStorage.setItem("bienvenido", 'Bienvenidos a CODER!!');

localStorage.setItem("esValido", true);

localStorage.setItem("unNumero", 20);

let array = [1,2,3,4]
localStorage.setItem("Precio", array);


// Se debe usar el get item para traer los datos del Storage asi se puede usar en nuestro codigo

//Lo primero es crear una variable y lo segundo es usar getItem.

let mensaje = localStorage.getItem('bienvenido');
let profesor = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');
let precioProducto = localStorage.getItem('Precio');

console.log(mensaje);
console.log(profesor);
console.log(numero);
console.log(precioProducto);

const producto1 = {id:1, nombre: 'camisa', precio: 20, img: 'colocar imagen'};
localStorage.setItem('producto1', producto1);

// Para convertir nuestros objetos se utiliza el stringify y el parse.

//el stringigy acepta un json y devuelve el objeto.

// el parse acepta un texto json como parámetro y devuleve el objeto.

const producto2 = {id:1, nombre: 'camisa', precio: 20, img: 'colocar imagen'};
const enJSON = JSON.stringify(producto2);
localStorage.setItem('producto2', enJSON);

