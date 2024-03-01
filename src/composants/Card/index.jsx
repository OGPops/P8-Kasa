import { NavLink } from "react-router-dom";

function Card({ title, picture, id}) {
    return (
        <div className="card-content">
            <NavLink to={`/Logement/${id}`}>
                <img className="card-cover" src={picture} alt={title}/>
                <div className="card-title-container">
                    <span className="card-title">{title}</span>
                </div>
            </NavLink>
        </div>
    )
}

//Propriétés par défaut au cas où elles ne seraient pas fournies
Card.defaultProps = {
    label: '',
    title: '',
    picture: '',
}

export default Card