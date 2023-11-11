import { useState } from "react";
import TurnSection from "./components/TurnSection";
import { TURNOS } from "./constans";
import ModalGame from "./components/ModalGame";
import Tablero from "./components/Tablero";
import actualizarTablero from "./logic/actualizarTablero";


function App() {
  /* estados */
  const [tablero, setTablero] = useState(Array(9).fill(null))
  const [turno, setTurno] = useState(TURNOS.X);
  const [ganador, setGanador] = useState(null)


  /* restablece el juego a su estado inicial */
  const resetState = () => {
    setTablero(Array(9).fill(null))
    setTurno(TURNOS.X)
    setGanador(null)
  }

  return (
    <main className="board">
      <h1>Juego del gato</h1>

      <Tablero
        tablero={tablero}
        setTablero={setTablero}
        ganador={ganador}
        setGanador={setGanador}
        turno={turno}
        setTurno={setTurno}

      />

      <TurnSection
        turno={turno}
      />

      <ModalGame
        ganador={ganador}
        resetState={resetState}
      />

    </main>
  )
}

export default App;