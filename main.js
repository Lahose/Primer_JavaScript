   let a = 5;
   let b = 10;
   let c = a + b;

   console.log("la suma de a y b es: ", c);

   let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

   console.log("¡Hola, ", nombreUsuario, "!");

   let d = 2;
   let f = 6;
   let g =32;

   console.log("El mayor de los tres numeros es: ", g);

   let numeroIngresado = prompt("Ingrese un número y te dire si es par o impar");
   if (numeroIngresado %2 === 0) {
       console.log("El numero", numeroIngresado, "es par");
   } else {
       console.log("El numero", numeroIngresado, "es impar");
   }


   let variable = 10
   while (variable <= 10 && variable > 0) {
       console.log(variable);
       variable = variable - 1;
   }

   let numero;
   do{
       numero = prompt("Por favor ingrese un número mayor a 100");
   } while (numero < 100){
       console.log("Ingresaste un número mayor a 100: ", numero);
   }

   let esPar;
   esPar = prompt("Por favor ingrese un número");
   if (esPar %2 === 0){
       console.log("El numero", esPar, "es par: true");
   } else {
       console.log("El numero", esPar, "es par: false");
   }

   let convertirCelsiusAFahrenheit; 
   let gradosCelsius;
   gradosCelsius =  prompt("Ingrese grados en Celsius");
   convertirCelsiusAFahrenheit = gradosCelsius * 1.8 + 32;
   console.log(gradosCelsius, "°C son equivalentes a", convertirCelsiusAFahrenheit,"°F");

   let persona = {
       nombre: 'Josefina',
       edad: 20,
       ciudad: 'Mendoza',
   }
   let nuevaCiudad = prompt("Ingrese una nueva ciudad: ");
   persona.ciudad = nuevaCiudad;
   console.log("Persona:", persona.nombre + ",", "Edad:", persona.edad + ",", "Ciudad:", persona.ciudad);


  let libro = {
      titulo: 'The Outsiders',
      autor: 'Susas Eloise Hinton',
      año: 1967,
  } 
  const fecha = new Date();
  const añoActual = fecha.getFullYear();
  if(añoActual - libro.año >= 10) {
      console.log('El libro','"'+ libro.titulo +'"', 'es antiguo: true');
  } else {
      console.log("El libro ''", libro.titulo, "'' es antiguo: false");
  }

 let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let numerosMultiplicados = [];

 for(let i = 0; i < numeros.length; i++){
     numerosMultiplicados.push(numeros[i] * 2);
 }
 console.log("Números originales:", numeros);
 console.log("Números múltiplicados por 2:", numerosMultiplicados);

 let pares = [];
 for( let i = 1; i <= 20; i++){
     if (i % 2 === 0) {
         pares.push(i);
     }
     if(pares.length === 10){
         break;
     }
 }
 console.log("Primeros 10 números pares:", pares);

let parrafos = document.getElementsByTagName("p");
let boton = document.getElementById("cambiarColor");

boton.addEventListener("click", function() {
  for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue";
  }
});

function mostrarAlerta() {
    var valor = document.getElementById("miInput").value;
    alert("Has ingresado: " + valor);
}

let lista = document.getElementById("miLista");
let elementos = lista.getElementsByTagName("li");

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function() {
    console.log(lista);
  });
}

let input = document.getElementById("miInput");
let deshabilitar = document.getElementById("deshabilitar");
let habilitar = document.getElementById("habilitar");

deshabilitar.addEventListener("click", function() {
  input.disabled = true;
});

habilitar.addEventListener("click", function() {
  input.disabled = false;
});


let formulario = document.getElementById("miFormulario");
let correoInput = document.getElementById("miCorreo");
let mostrarCorreo = document.getElementById("mostrarCorreo");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  let correo = correoInput.value;

  localStorage.setItem("correo", correo);

  mostrarCorreo.innerText = "Correo electrónico guardado: " + correo;

  let eliminarBtn = document.createElement("button");
  eliminarBtn.innerText = "Eliminar";
  eliminarBtn.addEventListener("click", function() {
    
    localStorage.removeItem("correo");

    mostrarCorreo.innerText = "";
  });
  mostrarCorreo.appendChild(eliminarBtn);
});

if (localStorage.getItem("correo")) {
  let correo = localStorage.getItem("correo");

  mostrarCorreo.innerText = "Correo electrónico guardado: " + correo;

}


let eliminarBtn = document.createElement("button");
eliminarBtn.innerText = "Eliminar Correo Guardado";
eliminarBtn.addEventListener("click", function() {
  
  localStorage.removeItem("correo");

  mostrarCorreo.innerText = "";
});
mostrarCorreo.appendChild(eliminarBtn);