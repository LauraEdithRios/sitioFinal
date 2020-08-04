/*//ejmplo1
const miTitulo = document.querySelector('h1');//le dice al doc del html q  le de el contenido del primer h1 q encuentre
miTitulo.textContent = 'HOLA MUNDO';//setea el valor y le asigna un nuevo valor
*/
//ejemplo 2

let miImagen = document.getElementById('copaFrancia');

miImagen.onclick = function(){

    let miScr = miImagen.getAttribute('src');
    if( miScr === 'imagenes/rusia2.jpg'){
        miImagen.setAttribute('src' ,'imagenes/rusia1.jpg');
    }else{
        miImagen.setAttribute('src', 'imagenes/rusia2.jpg')
    }
}

//ejemplo3

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableNombreUsuario(){
    let miNombre = prompt('Por favor, ingrese su nombre');
    alert('Nombre ingresado con exito');
    miTitulo.textContent = "Bienvenido, " + miNombre;
}

miBoton.onclick = function(){
    estableNombreUsuario();
}

