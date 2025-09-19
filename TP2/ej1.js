//ejercicio 1: Crear un objeto literal para un dispositivo de red

const router = {
    modelo = "Router",
    marca = "TP-Link",
    puertos: 4,
    velocidad: "1200 Mbps",
    soportaWifi: true
}

//ejercicio 2: Crea un array con 5 dispositivos de red (routers, switches, firewalls, etc.) donde cada uno sea un objeto literal con propiedades como tipo, marca, modelo y precio.

const dispositivosRed = [
    {
        tipo: "Router",
        marca: "TP-Link",
        modelo: "Archer A7",
        precio: 59.99
    },
    {
        tipo: "Switch",
        marca: "Netgear",
        modelo: "GS308",
        precio: 29.99
    },
    {
        tipo: "Firewall",
        marca: "Cisco",
        modelo: "ASA 5506",
        precio: 399.99
    },
    {
        tipo: "Access Point",
        marca: "Ubiquiti",
        modelo: "UniFi AP AC Lite",
        precio: 79.99
    },
    {
        tipo: "Router",
        marca: "Asus",
        modelo: "RT-AC66U",
        precio: 89.99
    }
];

/**
 **Teoría
// Acceder a un elemento por su índice (empiezan en 0)
console.log(dispositivosRed[1]); // -> { tipo: "Switch", ... }

// Saber cuántos elementos hay
console.log(dispositivosRed.length); // -> 5

// Agregar un nuevo elemento al final
const nuevoDispositivo = { tipo: "Access Point", marca: "Ubiquiti", precio: 320 };
dispositivosRed.push(nuevoDispositivo);

// Recorrer un array (recomendado por copilot)
dispositivosRed.forEach(dispositivo => {
    console.log(`Tipo: ${dispositivo.tipo}, Marca: ${dispositivo.marca}, Modelo: ${dispositivo.modelo}, Precio: ${dispositivo.precio}`);
});

// Recorrer un array (alternativa) 
for (const dispositivo of dispositivosRed) {
    // En cada repetición, 'dispositivo' es uno de los objetos del array
    console.log(`El dispositivo ${dispositivo.modelo} es de marca ${dispositivo.marca}.`);
}
 */

//ejercicio 3: Dado un array de dispositivos de red, utiliza el método filter() para obtener solo los dispositivos de una marca específica.

const dispositivosRed = [
  {tipo: "Router", marca: "Cisco", modelo: "1941", precio: 1200 },
  {tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
  {tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500 },
  {tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
  {tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180}
];

const marcaAFiltrar = "Cisco";

const dispositivosFiltrados = dispositivosRed.filter(function(dispositivo) {
    return dispositivo.marca === marcaAFiltrar;
});

console.log(dispositivosFiltrados);

//EJ 4: Dado un array de servidores con direcciones IP, utiliza el método map() para crear un nuevo array que contenga solo las direcciones IP.

const servidores = [
  { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
  { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
  { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
  { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
  { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];

const soloIps = servidores.map(function(servidor) {
  return servidor.ip;
});

console.log(soloIps);

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

//EJ 6: Dado un objeto con estadísticas de tráfico de red por hora, calcula el total de datos transferidos y la hora con mayor tráfico.

const traficoRed = {
  "08:00": 1250, "09:00": 1870, "10:00": 2100, "11:00": 1950,
  "12:00": 1600, "13:00": 1300, "14:00": 1700, "15:00": 2200,
  "16:00": 1800, "17:00": 1500
};

// --- PASO 1: Calcular el total de datos con .reduce() ---
const valoresTrafico = Object.values(traficoRed);
const totalTrafico = valoresTrafico.reduce(function(acumulador, valorActual) {
  return acumulador + valorActual;
}, 0);

console.log("Total de datos transferidos:", totalTrafico, "MB");


// --- PASO 2: Encontrar la hora con mayor tráfico ---
let maxTrafico = 0;
let horaPico = "";

for (let hora in traficoRed) {
  if (traficoRed[hora] > maxTrafico) { 
    maxTrafico = traficoRed[hora]; 
    horaPico = hora;               
  }
}

console.log("La hora de mayor tráfico fue a las", horaPico, "con", maxTrafico, "MB.");

//EJ 7: Dado un array de conexiones de red, agrupa las conexiones por protocolo y cuenta cuántas hay de cada tipo.

const conexiones = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
  { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
  { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
  { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];

const conexionesPorProtocolo = conexiones.reduce(function(acumulador, conexionActual) {
  const protocolo = conexionActual.protocolo;

  if (acumulador[protocolo]) {
    acumulador[protocolo]++; 
  } else {
    acumulador[protocolo] = 1;
  }

  return acumulador;
}, {});

console.log(conexionesPorProtocolo);

//EJ 8: Dado un array de alertas de seguridad de red, filtra las que sean de nivel "alto" y transfórmalas en mensajes para el administrador.

const dispositivos = [
  { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
  { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
  { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
  { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
  { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
  { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
  { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];

const informeActividad = conexionesActivas.map(function(conexion) {
  // --- PASO 1: Encontrar el dispositivo de ORIGEN ---
  // Busca en 'dispositivos' el que tenga una 'ip' igual a 'conexion.origen'.
  const dispositivoOrigen = dispositivos.find(function(dispositivo) {
    return dispositivo.ip === conexion.origen;
  });

  // --- PASO 2: Encontrar el dispositivo de DESTINO ---
  // Ahora haz lo mismo para el destino.
  const dispositivoDestino = dispositivos.find(function(dispositivo) {
    return /* TU CONDICIÓN DE BÚSQUEDA PARA EL DESTINO */;
  });

  // --- PASO 3: Retornar el nuevo objeto combinado ---
  return {
    origen_nombre: dispositivoOrigen.nombre,
    destino_nombre: dispositivoDestino.nombre,
    protocolo: conexion.protocolo,
    bytes_transferidos: conexion.bytes
  };
});

console.log(informeActividad);

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
// Inicializamos el contador para cada nodo en 0
topologiaRed.nodos.forEach(nodo => {
  conexionesPorNodo[nodo.id] = 0;
});

// Ahora recorremos las conexiones para contar
// PREGUNTA: Por cada conexión, ¿qué dos contadores debes incrementar?
topologiaRed.conexiones.forEach(conexion => {
  // Tu código para incrementar el contador del origen
  /* TU CÓDIGO AQUÍ */
  // Tu código para incrementar el contador del destino
  /* TU CÓDIGO AQUÍ */
});
console.log("Conexiones por nodo:", conexionesPorNodo);


// --- PASO 2: Encontrar los nodos con más conexiones ---
const nodosOrdenados = Object.entries(conexionesPorNodo)
  .sort(function(a, b) {
    // PREGUNTA: 'a' y 'b' son arrays como ['A', 2]. ¿Cómo los ordenas
    // de mayor a menor basándote en el número?
    return /* TU LÓGICA DE ORDENAMIENTO */;
  });
console.log("Nodos ordenados:", nodosOrdenados);


// --- PASO 3: Sugerir optimizaciones ---
const sugerencias = nodosOrdenados
  .filter(function(nodo) {
    // PREGUNTA: ¿Cómo filtras para quedarte con los nodos que tienen más de 2 conexiones?
    return /* TU CONDICIÓN DE FILTRADO */;
  })
  .map(function(nodo) {
    // PREGUNTA: ¿Cómo transformas el nodo en un string de sugerencia?
    return /* TU STRING DE SUGERENCIA */;
  });
console.log("Sugerencias de optimización:", sugerencias);

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
  .filter(nodo => nodo[1] > 2) // Filtramos los que tienen más de 2
  .map(nodo => `El nodo ${nodo[0]} tiene ${nodo[1]} conexiones y podría necesitar una revisión.`); // Creamos el mensaje

console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);


