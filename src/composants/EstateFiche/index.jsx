import { useParams } from 'react-router-dom'
import data from '../../logements.json'
import Carrousel from '../Carrousel'
import EstateTitle from '../EstateTitle'
import EstateTags from '../EstateTags'
import EstateProfil from '../EstateProfil'
import EstateRating from '../EstateRating'
import Collapse from '../Collapse'

const Estate = () => {
    const { id } = useParams()
    const estate = data.find((estate) => estate.id === id)

    return (
        <div className="fiche-estate-mobile">
            <Carrousel id={estate.id} images={estate.pictures} />

            <div className="first-container">
                <div>
                    <EstateTitle title={estate.title} subtitle={estate.location} />
                    <EstateTags />
                </div>

                <div className="estate-profil-mobile">
                    <EstateProfil id={estate.id}
                    hostPicture={estate.host.picture}
                    hostName={estate.host.name}
                    />
                    <EstateRating rating={estate.rating} />
                </div>
            </div>

            <div className="second-container">
                <Collapse className="collapse-container" name="Description" content={estate.description}/>
                <Collapse className="collapse-container" name="Equipements" content={estate.equipments.map((equipment, index) =>
                <ul key={index}>{equipment}</ul>
                )}
                />
            </div>
        </div>
    )
}

export default Estate 