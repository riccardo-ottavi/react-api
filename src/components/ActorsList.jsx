import { useEffect, useState } from 'react'
import ActorCard from './ActorCard';

const endPoint = "https://lanciweb.github.io/demo/api/actors/"

export default function ActorsList() {

      const [ actors, setActors ] = useState([]);
    
    
      function fetchActors(){
        axios.get(endPoint)
          .then((res) => setActors(res.data))
      }
    
      useEffect(fetchActors, [])

    return (
        <div className="actors-list">
            <ul>
                {actors.map((actor) => (
                    <ActorCard
                        key={actor.id}
                        actorProp = {actor}
                    />
                ))}
            </ul>
        </div>

    )
}