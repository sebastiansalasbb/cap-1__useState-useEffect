import actualizarTablero from "../logic/actualizarTablero"

export default function Celda({ children, index, isSelected, setTablero, ganador, setGanador, turno, setTurno, tablero }) {
    /* handleclick emite un evento y ejecuta funcion de su padre */
    const handleClick = () => {
        actualizarTablero(index, tablero, setTablero, ganador, setGanador, turno, setTurno)
    }

    /* añadimos una clase que destaca el elemento en razon del turno del jugador */
    const className = `square ${isSelected && "is-selected"}`
    return (
        <div className={className} onClick={handleClick} >
            {children}
        </div>
    )
}


