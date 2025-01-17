import React, { useEffect,  useState } from 'react'
import FetchList from './FetchList'

const FetchContainer = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect (()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json()) //convertir
        .then((data)=> setPersonajes (data.results)) //guardar
        .catch((error)=> console.log(error)) //atrapar error
       
    },[])
console.log(personajes, 'personajes')
  return (
    <div>
        <FetchList personajes={personajes}/>
    </div>
  )
}

export default FetchContainer
