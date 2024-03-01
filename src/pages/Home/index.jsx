import TopBackground from '../../composants/TopBackground'
import Card from '../../composants/Card'
import Header from '../../composants/Header'
import Footer from '../../composants/Footer'
import Data from '../../logements.json'
import ImageBackground from '../../assets/img/banner.png'

function Home() {
    return (
        <div>
            <header className="defaultstyle">
                <Header />
            </header>
            <TopBackground 
            picture={ImageBackground}
            alt="Image de falaises"
            title="Chez vous, partout et ailleurs"
            />
            <main className="cards-container">
                {Data.map((estates, index) => (
                    <Card
                    key={`${estates.id}-${index}`}
                    id={estates.id}
                    title={estates.title}
                    picture={estates.cover}
                    className="card"
                    />
                ))}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home