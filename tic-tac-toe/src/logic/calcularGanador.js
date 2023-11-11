import { LINEASGANADORAS } from "../constans";

/* funcion que compara cada posible combinacion ganadora con los valores insertados en el tablero. Retorna el valor del jugador en caso de coincidir */
const calcularGanador = (tablero) => {

    //iteramos sobre las lineas ganadoras para obtener su indice y luego usamos los indices para usarlos en el tablero, obtener el simbolo en cada posicion y verificar si las demas dos posiciones tienen el mismo simbolo creando una combinacion ganadora
    for (const lineaGanadora of LINEASGANADORAS) {
        const [posicion1, posicion2, posicion3] = lineaGanadora;
        if (tablero[posicion1] === tablero[posicion2] && tablero[posicion1] === tablero[posicion3]) {
            return tablero[posicion1]
        }
    }
    return null
}

export default calcularGanador;