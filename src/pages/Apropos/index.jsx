import TopBackground from '../../composants/TopBackground'
import Collapse from '../../composants/Collapse'
import Header from '../../composants/Header'
import Footer from '../../composants/Footer'
import ImageBackground from '../../assets/img/banner-a-propos.png'

function Apropos() {
    return (
        <div>
            <header className="defaultstyle">
                <Header />
            </header>
            <main className="apropos-container">
                <TopBackground
                picture={ImageBackground} alt="Image de montagnes" title="" />
                <div className="collapse-container-apropos">
                <Collapse name="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                <Collapse name="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."/>
                <Collapse name="Service"
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Collapse name="Sécurité"
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

export default Apropos