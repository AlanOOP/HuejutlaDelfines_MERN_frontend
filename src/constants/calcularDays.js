
// Función para calcular la diferencia en días entre dos fechas
function obtenerFecha(fechaString) {
    const partes = fechaString.split(', '); // Dividir la cadena en partes por la coma y el espacio
    const fechaPartes = partes[1].split(' de '); // Dividir la parte de la fecha por el espacio 'de'

    const dia = parseInt(fechaPartes[0], 10); // Obtener el día como número
    const mes = fechaPartes[1]; // Obtener el mes
    const año = parseInt(fechaPartes[2], 10); // Obtener el año como número

    return new Date(año, obtenerNumeroMes(mes), dia); // Crear un objeto de fecha
}

function obtenerNumeroMes(mes) {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return meses.indexOf(mes.toLowerCase());
}

// Función para calcular la diferencia en días entre dos fechas
export function diferenciaEnDias(fechaInicio, fechaFin) {
    // Convertir las fechas a objetos Date
    const fechaInicioObj = obtenerFecha(fechaInicio);
    const fechaFinObj = obtenerFecha(fechaFin);

    // Calcular la diferencia en milisegundos
    const diferenciaMs = Math.abs(fechaFinObj - fechaInicioObj);

    // Convertir la diferencia en días y redondear al entero más cercano
    const diferenciaDias = Math.round(diferenciaMs / (1000 * 60 * 60 * 24));

    return diferenciaDias;
}
