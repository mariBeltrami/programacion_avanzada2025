

const carrito = ['Producto 1', 'Producto2', 'Producto3'];

console.log(carrito);

carrito.map(producto => {
    return `El producto es: $(producto)`;
})

// spread operator

let lenguajes = [ 'JavaScript', ' Python', 'Java'];
let frameworks = ['React', 'Angular', 'Vue'];

// unir los arrays en un solo array

let tecnologias = [... lenguajes, ... frameworks];

console.log(tecnologias);

let tecnologias2 = ['C#', 'PHP', 'Ruby'];

// unir los arrays en un solo array
let tecnologiasCompletas = lenguajes.concat(frameworks, tecnologias2);

console.log(tecnologiasCompletas);