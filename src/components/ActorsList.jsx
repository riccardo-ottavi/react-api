import { useEffect, useState } from 'react'
import ActorCard from './ActorCard';

const ActorsEndPoint = "https://lanciweb.github.io/demo/api/actors/"
const ActressEndPoint = "https://lanciweb.github.io/demo/api/actresses/"

export default function ActorsList() {

    const [actors, setActors] = useState([]);
    const [actress, setActress] = useState([]);

    function fetchActors() {
        axios.get(ActorsEndPoint)
            .then((res) => setActors(res.data))
    }

    function fetchActress() {
        axios.get(ActressEndPoint)
            .then((res) => setActress(res.data))
    }

    useEffect(() => {
        fetchActors();
        fetchActress();

    }
        , []);

    return (
        <div className="actors-list">
            <ul>
                {actors.map((actor) => (
                    <ActorCard
                        key={actor.id}
                        actorProp={actor}
                    />
                ))}
                {actress.map((actor) => (
                    <ActorCard
                        key={actor.id}
                        actorProp={actor}
                    />
                ))}
            </ul>
        </div>

    )
}