import Celda from "./Celda";

export default function ModalGame({ ganador, resetState }) {
    return (
        <section>
            {ganador !== null && (
                <section className="winner">
                    <div className="text">
                        <h2>
                            {ganador ? "ganador:" : "empate"}
                        </h2>
                        <header className="win">
                            {ganador && <Celda>{ganador}</Celda>}
                        </header>
                        <footer>
                            <button onClick={resetState} >Empezar otra vez</button>
                        </footer>
                    </div>


                </section>
            )}
        </section>
    )
}