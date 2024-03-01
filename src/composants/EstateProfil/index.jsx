function EstateProfil({ id, hostName, hostPicture }) {
    return (
        <div className="estate-profil-container">
            <p className="host-name">{hostName}</p>
            <img className="host-picture" key={id} src={hostPicture} alt={hostName} />
        </div>
    )
}

export default EstateProfil 