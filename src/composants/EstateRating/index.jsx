import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EstateRating({ rating }) {
    const filledStars = Math.floor(rating)

    return (
        <div className="estate-rating">
            {Array.from({ length: 5}, (_, index) => (
                <span key={index} className="star">
                    {index < filledStars ? (
                        <FontAwesomeIcon icon={faStar} className="starFilled" />
                    ) : (
                        <FontAwesomeIcon icon={faStar} className="star-empty" />
                    )}
                </span>
            ))}
        </div>
    )
}

export default EstateRating