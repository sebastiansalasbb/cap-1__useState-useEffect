import confetti from "canvas-confetti";
import { TURNOS } from "../constans";
import calcularGanador from "./calcularGanador";

/* dibuja el simbolo asignado en alguna celda  */
const actualizarTablero = (index, tablero, setTablero, ganador, setGanador, turno, setTurno) => {

    //impide que se dibuje el simbolo si ya hay un valor o ganador
    if (tablero[index] || ganador) return

    //modificamos el tablero insertando un simbolo en una celda
    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)

    //luego cambiamos el turno para que se dibuje otro simbolo
    const calcularTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurno(calcularTurno)

    //se determina si la celda dibujada genera un ganador
    const win = calcularGanador(nuevoTablero)
    //si existe valor entonces se añade al estado y se lanza confetti
    if (win) {
        setGanador(win)
        confetti()
    } else {
        //determina si no hay mas celdas por llenar y termina el juego
        const sinJugadas = nuevoTablero.every((e) => e !== null);
        if (sinJugadas) setGanador(false)
    }




}

export default actualizarTablero