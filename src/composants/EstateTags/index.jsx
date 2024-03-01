import { useParams } from 'react-router-dom'
import data from '../../logements.json'

function EstateTags() {
    const { id } = useParams()
    const estates = data.find((estate) => estate.id === id)

    return (
        <div className="estates-tags-container">
            {estates.tags.map((tag, index) => (
                <span key={index} className="estates-tag">
                    {tag}
                </span>
            ))}
        </div>
    )
}

export default EstateTags