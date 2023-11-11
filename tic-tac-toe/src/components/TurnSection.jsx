import { TURNOS } from "../constans";
import Celda from "./Celda";

export default function TurnSection({ turno }) {
    return (
        <section className="turn">
            <Celda isSelected={turno === TURNOS.X} >
                {TURNOS.X}
            </Celda>

            <Celda isSelected={turno === TURNOS.O}>
                {TURNOS.O}
            </Celda>
        </section>
    )
}