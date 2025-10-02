export default function ActorCard(prop) {

    const {name, birth_year, nationality, biography, awards, image, known_for} = prop.actorProp;

    return (

        <li><div className="actor-card">
            <img src={image}></img>
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Birth:</strong> {birth_year}</p>
            <p><strong>Nationality</strong>: {nationality}</p>
            <p><strong>Biograophy: </strong>{biography}</p>
            <p><strong>Awards:</strong>{awards}</p>
            <p><strong>Know for:</strong>{known_for}</p>
        </div></li>

    )
}  