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
                  <span>{actor.name}</span>
                  <span>{actor.birth_year}</span>
                  <span>{actor.nationality}</span>
                  <span>{actor.biography}</span>
                  <span>{actor.image}</span>
                  <span>{actor.awards}</span>
                </div></li>
            
            ))}
          </ul>
    </div>
    
  );
}

export default App
