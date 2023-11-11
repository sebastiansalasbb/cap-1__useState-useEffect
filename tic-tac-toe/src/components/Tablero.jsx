import Celda from "./Celda"

export default function Tablero({ tablero, setTablero, ganador, setGanador, turno, setTurno }) {
    return (
        <section className="game">
            {tablero.map((_, index) => {
                return (
                    <Celda
                        key={index}
                        index={index}
                        tablero={tablero}
                        setTablero={setTablero}
                        ganador={ganador}
                        setGanador={setGanador}
                        turno={turno}
                        setTurno={setTurno}

                    >
                        {tablero[index]}
                    </Celda>
                )
            })}
        </section>
    )
}