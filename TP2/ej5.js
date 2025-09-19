//EJ 5: Dado un array de paquetes de datos, filtra aquellos que tengan un tamaño mayor a 1000 bytes y ordénalos de mayor a menor según su prioridad.

const paquetesDatos = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3},
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5},
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2},
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

const paquetesGrandesPrioritarios = paquetesDatos
  .filter(function(paquete) {
    return paquete.tamaño > 1000;
  })
  .sort(function(a, b) {
    return b.prioridad - a.prioridad;
  });

console.log(paquetesGrandesPrioritarios);