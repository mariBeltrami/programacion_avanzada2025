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