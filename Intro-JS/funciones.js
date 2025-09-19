// function declaration 

function saludar(nombre) {
    console.log("Bienvenido" + nombre + "! ");
}

saludar("Ernesto");

// function expression

const cliente1 = function(nombreCliente) {
    console.log("Mostrando datos del cliente: " + nombreCliente);
}

cliente1("Juan");

//con más parámetros. 

const cliente2 = function(nombreCliente, edadCliente) {
    console.log("Mostrando datos del cliente: " + nombreCliente + " Edad: " + edadCliente);
}

cliente2("Juan", 32);

function actividad(nombre, nombreActividad) { 
    console.log(`El cliente ${nombre} está realizando la actividad: ${nombreActividad}`)
}

actividad("Ernesto", "programación en JavaScript");
actividad("Juan", "Desarrollo web");

//

function actividad2(nombre = "Walter", nombreActividad = "Profesor") { 
    console.log(`El cliente ${nombre} está realizando la actividad: ${nombreActividad}`)
}

actividad2("Ernesto", "programación en JavaScript");
actividad2("Juan", "Desarrollo web");
actividad2(); //usando valores por defecto

