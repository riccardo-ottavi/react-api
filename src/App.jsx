import { useEffect, useState } from 'react'

import './App.css'

const endPoint = "https://lanciweb.github.io/demo/api/actors/"




function App() {
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
              <li><div className="actor-card">
                  <img src={actor.image}></img>
                  <p><strong>Name: </strong>{actor.name}</p>
                  <p><strong>Birth:</strong> {actor.birth_year}</p>
                  <p><strong>Nationality</strong>: {actor.nationality}</p>
                  <p><strong>Biograophy: </strong>{actor.biography}</p>
                  <p><strong>Awards:</strong>{actor.awards}</p>
                </div></li>
            
            ))}
          </ul>
    </div>
    
  );
}

export default App
