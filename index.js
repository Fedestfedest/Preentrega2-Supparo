
function productoConDescuento (productos){
    for (let i = 0; i < productos.length; i++ ){
        if (productos[i].oferta === true){
            productos[i].Precio = productos[i].Precio * 0.8
        }
    }
    
}

function ordenarProductos(productos) {
   productos.sort(({ Nombre }, { Nombre: Nombre2 }) => (Nombre.toLowerCase() > Nombre2.toLowerCase() ? 1 : -1));
 }

function filtrarProductos (productos,verOfertas) {
      if (verOfertas === true){
         const ofertasFiltradas = productos.filter(producto => producto.oferta);
         console.log(ofertasFiltradas);
      } 
       
}


function buscadorDeProductos (productos,verOfertas,) {
      if (!verOfertas) {
         const buscarProductos = prompt("Que producto desdea de nuestro catalogo?")
         const productoBuscado = productos.find(producto => producto.Nombre == buscarProductos)
         console.log(productos)
         alert(`${productoBuscado.Nombre}, USD ${productoBuscado.Precio}, ${productoBuscado.descripción}`)
      }else {
         console.log(productos)
      }
   }



const productos = [{
   "id" : 1,
   "Nombre" : "Pack 5 juegos de computadora",
   "Precio" : 150,
   "fechaVencimiento" : "N/A",
   "descripción" : "Juegos increibles para divertirte durante un año o un dia dependiendo del vicio.",
   "categoría" : "Gaming",
   "oferta" : false,
},

{
    "id" : 2,
    "Nombre" : "Tarjeta de video Pro-Max",
    "Precio" :  3000,
    "fechaVencimiento" : "N/A",
    "descripción" : "Tremenda tarjeta de video para hacer correr todos los juegos que vendemos.",
    "categoría" : ["Gaming", "Informatica" ],
    "oferta" : false,
 },

 {
    "id" : 3,
    "Nombre" : "Tarjeta de video lite",
    "Precio" : 10,
    "fechaVencimiento" : "N/A",
    "descripción" : "Una tarjeta de vidoe que no sirve de mucho es casi como tener una integrada.",
    "categoría" : "Informatica",
    "oferta" : true,
 },
 
 {
    "id" : 4,
    "Nombre" : "Silla comoda con masajes",
    "Precio" : 500,
    "fechaVencimiento" : "N/A",
    "descripción" : "Silla con respaldos moviles, acolchonada y que hace masajes.",
    "categoría" : "Hogar",
    "oferta" : false,
 },

 {
    "id" : 5,
    "Nombre" : "Mesa de madera curada con kryptonita",
    "Precio" : 10000,
    "fechaVencimiento" : "30/12/2061",
    "descripción" : "Mesa de madera muy resistente deibdo a las propiedades de la kryptonita, no apta para kryptonianos",
    "categoría" : "Hogar",
    "oferta" : false,
 },

 {
    "id" : 6,
    "Nombre" : "Ventilador de mano",
    "Precio" : 11,
    "fechaVencimiento" : "N/A",
    "descripción" : "Ventilador pequeño a pila, muy util para lugares sin energía",
    "categoría" : "Varios",
    "oferta" : true,
 },

 {
    "id" : 7,
    "Nombre" : "Espadas del Caos",
    "Precio" :999999,
    "fechaVencimiento" : "N/A",
    "descripción" : "Espadas usadas por Kratos para matar varios dioses, vienen con sangre incluida",
    "categoría" : "Armas",
    "oferta" : true,
 },

 {
    "id" : 8,
    "Nombre" : "Disco de vinilo de los Gemeliers",
    "Precio" : 5,
    "fechaVencimiento" : "N/A",
    "descripción" : "Los discos de vinilo de los Gemeliers son muy utilizados por Hernan Cattaneo en sus recitales, debido a su gran musica.",
    "categoría" : "Musica",
    "oferta" : false,
 },

 {
    "id" : 9,
    "Nombre" : "Lata de atun",
    "Precio" : 1,
    "fechaVencimiento" : "15/10/2022",
    "descripción" : "Deliciosa lata de atun, si tiene sabor raro es por la pesca.",
    "categoría" : "Alimentos",
    "oferta" : true,
 },

 {
    "id" : 10,
    "Nombre" : "Microondas",
    "Precio" : 150,
    "fechaVencimiento" : "N/A",
    "descripción" : "Sirve para calentsr alimentos de forma rapida.",
    "categoría" : "Hogar",
    "oferta" : false,
 },

 {
    "id" : 11,
    "Nombre" : "Polvo de proxima centauri (50gr)",
    "Precio" : 30000,
    "fechaVencimiento" : "N/A",
    "descripción" : "Polvo de la estrella mas cercana al sol, se dice que tiene muy  buernas propiedades.",
    "categoría" : "Psico-activo",
    "oferta" : false,
 },

 {
    "id" : 12,
    "Nombre" : "Championes Puma",
    "Precio" : 150,
    "fechaVencimiento" : "N/A",
    "descripción" : "Par de championes de buena calidad, excelentes para hacer ejercicio.",
    "categoría" : "Ropa",
    "oferta" : false,
 },

 {
    "id" : 13,
    "Nombre" : "Nave espacial SpaceX",
    "Precio" : 600,
    "fechaVencimiento" : "N/A",
    "descripción" : "Nave esacial para hacer todo tipo de recorridos, recomendable no ir mas lejos de la luna.",
    "categoría" : "Vechiculos",
    "oferta" :false,
 },

 {
    "id" : 14,
    "Nombre" : "Camiseta firmada Messi",
    "Precio" : 25000,
    "fechaVencimiento" : "N/A",
    "descripción" : "Camiseta de la selección Argentina firmada por uno de los mejores jugadores del mundo",
    "categoría" : "Ropa",
    "oferta" : false,
 },

 {
    "id" : 15,
    "Nombre" : "Cosechadora",
    "Precio" : 200000,
    "fechaVencimiento" : "N/A",
    "descripción" :"Cosechadora para todo tip ode granos, tanto trigo, cebada, maiz, sorgo, etc. Muy buena herramienta para tus sistemas productivos.",
    "categoría" : "Herramientas",
    "oferta" : true,
 }


]

productoConDescuento(productos)

const copiaDeProductos = [...productos]

ordenarProductos(productos)

const verOfertas = confirm("Desea ver ofertas disponibles?")

filtrarProductos(productos,verOfertas)



buscadorDeProductos(productos)