//EJ 9: Combina información de dispositivos y conexiones para crear un informe detallado de la actividad de red.
const topologiaRed = {
  nodos: [
    { id: "A", tipo: "Router", ubicacion: "Planta 1"},
    { id: "B", tipo: "Switch", ubicacion: "Planta 1"},
    { id: "C", tipo: "Switch", ubicacion: "Planta 2"},
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
    { id: "E", tipo: "Router", ubicacion: "Planta 3" }
  ],
  conexiones: [
    { origen: "A", destino: "B", ancho_banda: 1000},
    { origen: "A", destino: "C", ancho_banda: 1000},
    { origen: "B", destino: "C", ancho_banda: 100},
    { origen: "B", destino: "D", ancho_banda: 100},
    { origen: "C", destino: "D", ancho_banda: 100},
    { origen: "C", destino: "E", ancho_banda: 1000},
    { origen: "D", destino: "E", ancho_banda: 1000}
  ]
};

// --- PASO 1: Contar conexiones por nodo ---
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
  conexionesPorNodo[nodo.id] = 0;
});


topologiaRed.conexiones.forEach(conexion => {
  conexionesPorNodo[conexion.origen]++;
  conexionesPorNodo[conexion.destino]++;
});
console.log("Conexiones por nodo:", conexionesPorNodo);


// --- PASO 2: Encontrar los nodos con más conexiones ---
const nodosOrdenados = Object.entries(conexionesPorNodo)
  .sort(function(a, b) {
    return b[1] - a[1];
  });
console.log("Nodos ordenados:", nodosOrdenados);


// --- PASO 3: Sugerir optimizaciones ---
const sugerencias = nodosOrdenados
  .filter(function(nodo) {
    return nodo[1] > 2;
  })
  .map(function(nodo) {
    return `El nodo ${nodo[0]} tiene ${nodo[1]} conexiones y podría necesitar una revisión.`;
  });
console.log("Sugerencias de optimización:", sugerencias);
