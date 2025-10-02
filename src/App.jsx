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
    <ul>
      {actors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
       
      ))}
    </ul>
  );
}

export default App
