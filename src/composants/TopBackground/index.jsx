function TopBackground({ picture, alt, title }) {
    return (
        <div className="background-container">
            <img className="background-img" src={picture} alt={alt} />
            <h1 className="background-title">{title}</h1>
        </div>
    )
}

export default TopBackground