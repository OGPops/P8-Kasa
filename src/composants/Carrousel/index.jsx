import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

//Définition Carrousel
const Carrousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((previousSlide) =>
        previousSlide === images.length - 1 ? 0 : previousSlide + 1)
    }

    const previousSlide = () => {
        setCurrentSlide((previousSlide) =>
        previousSlide === 0 ? images.length - 1 : previousSlide - 1)
    }

    return (
        <div className="carrousel">
            {images.length > 1 && (
                <button className="previousButton" onClick={previousSlide}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button> 
            )}
            
            <div className="carrousel-container">
                {
                    images.map((image, index) => (
                        <div className={`carrousel-img ${currentSlide === index ? 'active' : ''}`}
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: currentSlide === index ? 1 : 0,
                            transition: 'opacity 0.5s ease',
                            zIndex: currentSlide === index ? 1 : 0,
                        }}
                        >
                        <img className={`setImg carrousel-img`}
                        src={image}
                        alt={`Slide ${index}`}
                        />
                    </div>
                    ))
                }
            </div>

            {images.length > 1 && (
                <button className="nextButton" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}

            {images.length > 1 && (
                <div className="carrousel-counter">
                    {currentSlide + 1} / {images.length}
                </div>    
            )}
        </div>
    )
}

export default Carrousel