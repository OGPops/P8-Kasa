import { useParams } from "react-router-dom";
import data from '../../logements.json'
import EstateFiche from '../../composants/EstateFiche'
import Header from '../../composants/Header'
import Footer from '../../composants/Footer'
import Erreur404 from '../../composants/Erreur404'

function EstatePage() {
    const { id } = useParams()
    const estate = data.find((estate) => estate.id === id)

    return (
        <div>
            <header className="defaultstyle">
                <Header />
            </header>

            {estate ? (
                <section className="main-estate">
                    <EstateFiche />
                </section>
            ) : (
                <div>
                    <Erreur404 />
                </div>
            )}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default EstatePage