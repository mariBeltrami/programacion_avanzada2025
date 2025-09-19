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
  const dispositivoOrigen = dispositivos.find(function(dispositivo) {
    return dispositivo.ip === conexion.origen;
  });

  // --- PASO 2: Encontrar el dispositivo de DESTINO ---
  const dispositivoDestino = dispositivos.find(function(dispositivo) {
    return dispositivo.ip === conexion.destino;
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
