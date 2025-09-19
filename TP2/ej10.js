//ejercicio 10: Dado un objeto que representa una topología de red, encuentra los nodos con más conexiones y sugiere optimizaciones.

const topologiaRed = {
  nodos: [
    { id: "A", tipo: "Router", ubicacion: "Planta 1"}, { id: "B", tipo: "Switch", ubicacion: "Planta 1"},
    { id: "C", tipo: "Switch", ubicacion: "Planta 2"}, { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
    { id: "E", tipo: "Router", ubicacion: "Planta 3" }
  ],
  conexiones: [
    { origen: "A", destino: "B", ancho_banda: 1000}, { origen: "A", destino: "C", ancho_banda: 1000},
    { origen: "B", destino: "C", ancho_banda: 100},  { origen: "B", destino: "D", ancho_banda: 100},
    { origen: "C", destino: "D", ancho_banda: 100},  { origen: "C", destino: "E", ancho_banda: 1000},
    { origen: "D", destino: "E", ancho_banda: 1000}
  ]
};

// 1. Contar conexiones
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
  conexionesPorNodo[nodo.id] = 0;
});

topologiaRed.conexiones.forEach(conexion => {
  conexionesPorNodo[conexion.origen]++;
  conexionesPorNodo[conexion.destino]++;
});

// 2. Ordenar nodos
const nodosOrdenados = Object.entries(conexionesPorNodo)
  .sort((a, b) => b[1] - a[1]);

// 3. Sugerir optimizaciones (para nodos con más de 2 conexiones)
const sugerencias = nodosOrdenados
  .filter(nodo => nodo[1] > 2) 
  .map(nodo => `El nodo ${nodo[0]} tiene ${nodo[1]} conexiones y podría necesitar una revisión.`); 

console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);
