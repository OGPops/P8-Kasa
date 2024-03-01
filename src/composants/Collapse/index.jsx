import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ name, content }) {
    const [isOpen, setIsOpen] = useState(true)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse-container">
            <div className="collapse-title">
                <p>{name}</p>
                <button onClick={toggleCollapse} className={isOpen ? 'close' : 'open'}>
                    <FontAwesomeIcon icon={faChevronUp}/>
                </button>
            </div>
            <div className={`collapse-content ${isOpen ? 'close' : 'open'}`}>
                {!isOpen && <div className="collapse-content-text">{content}</div>}
            </div>
        </div>
    )
}

export default Collapse