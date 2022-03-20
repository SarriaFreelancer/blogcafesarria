// Para sdeleccionar contenido desde javascript 

// querySelector
// const heading = document.querySelector("#heading");//0 o 1 elemento
// heading.textContent  = "Nuevo Heading";



// // querySelectorAll
// const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces[0]);

// enlaces[0].textContent = "Nuevo Texto Para El Enlace";
// //getElementById
// // const heading2 = document.getElementById('heading');
// // console.log(heading2);

// //Generar un nuevo enlaces

// const nuevoEnlace = document.createElement('A');
// //Agregar el href
// nuevoEnlace.href = "https//:www.google.com";
// //Agregar Texto
// nuevoEnlace.textContent = "Tienda Virtual";
// // Agregar clase
// nuevoEnlace.classList = "navegacion_enlace";

// //Agregar elemento al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

// // Eventos
// console.log(1);

// window.addEventListener('load', imprimir);
// window.onload = function(){
//     console.log(3);
// }
// document.addEventListener('DOMContentLoaded', function(){ // solo espera que desacargue el html, pero no  espera a CSS o Imagenes
//     console.log(4);
// })
// console.log(5);

// function imprimir(){
//     console.log(2)
// }


// window.onscroll = function(evento){
//     console.log(evento);
// }

//Seleccionar elementos y asociarles un evento 
// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento.currentTarget);
//     console.log(evento.preventDefault());
//     console.log('Enviando formulario');
// });
//El evento de submits para







//Validar formulario

//eventos de los inputs y los textarea

//Validar formulario

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario
    const {nombre, email, mensaje} = datos;

    if (nombre === ''|| email === ''|| mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        //return; //Corta la ejecucuion del codigo
    } else {
        mostrarAlerta('El Formulario fue enviado con exito');

        return;
    }
    //Enviar formulario

    console.log('Enviando Formulario...')
});

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('exito');
    }
    formulario.appendChild(alerta);
    //Desaparece depues de 5 segundos
    setTimeout( () => {
        alerta.remove();
    }, 5000 );
}







