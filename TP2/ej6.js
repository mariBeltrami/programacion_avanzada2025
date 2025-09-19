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