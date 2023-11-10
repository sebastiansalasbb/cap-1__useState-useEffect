import { useState } from "react";

/* simbolos que se puedan asignar a los jugadores */
const TURNOS = {
  X: "x",
  O: "o"
}

/* combinaciones de celdas ganadoras */
const LINEASGANADORAS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]



const Celda = ({ children, actualizarTablero, index, isSelected }) => {


  const handleClick = () => {
    actualizarTablero(index)
  }

  const className = `square ${isSelected && "is-selected"}`
  return (
    <div className={className} onClick={handleClick} >
      {children}

    </div>
  )
}


function App() {
  /* estados */
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNOS.X);
  const [ganador, setGanador] = useState(null)


  /* metodos */

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


  /* dibuja el simbolo asignado en alguna celda  */
  const actualizarTablero = (index) => {

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
    if (win) {
      setGanador(win)
    }
  }

  return (
    <main className="board">
      <h1>Juego del gato</h1>
      <section className="game">
        {tablero.map((_, index) => {
          return (
            <Celda
              key={index}
              index={index}
              actualizarTablero={actualizarTablero} >
              {tablero[index]}

            </Celda>
          )
        })}
      </section>

      <section className="turn">
        <Celda isSelected={turno === TURNOS.X} >
          {TURNOS.X}
        </Celda>

        <Celda isSelected={turno === TURNOS.O}>
          {TURNOS.O}
        </Celda>
      </section>

    </main>
  )
}

export default App;