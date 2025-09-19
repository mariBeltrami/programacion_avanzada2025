//métodos en arrays

const personas = [
    { nombre : "Juan", edad: 25 , aprendiendo: 'javascript' },
    { nombre : "Ana", edad: 30 , aprendiendo: 'python' },
    { nombre : "Pedro", edad: 28 , aprendiendo: 'java' },
    { nombre : "Maria", edad: 35 , aprendiendo: 'c#' },
    { nombre : "Luis", edad: 22 , aprendiendo: 'javascript' },
]

console.log(personas);

// funcion para filtrar mayores de 28 

const mayores = personas.filter(persona => persona.edad <= 28);

console.log(mayores);


// funcion para filtrar qué está aprendiendo y la edad

const ana = personas.find(persona => persona.nombre = 'Ana');

console.log(ana.edad);


//filtrar entre dos objetos con una función: listado de personas mayores de 28 años 

const personas2 = [
    { nombre : "Ruben", edad: 25 , aprendiendo: 'javascript' },
    { nombre : "Mari", edad: 23 , aprendiendo: 'python' },
    { nombre : "Alan", edad: 31 , aprendiendo: 'java' },
    { nombre : "Luna", edad: 3 , aprendiendo: 'c#' },
    { nombre : "Javi", edad: 20 , aprendiendo: 'javascript' },
]

const mayores = [ ...personas, ...personas2].filter(persona => persona.edad > 28);
