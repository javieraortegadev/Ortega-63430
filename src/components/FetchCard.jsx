import React from 'react'

const FetchCard = ({personaje}) => {
  return (
    <div className="card" style={{width:' 18rem', height:'18rem'}}>
    <img src={personaje.image} className="card-img-top" alt={personaje.name}/>
    <div className="card-body">
      <h5 className="card-title">{personaje.name}</h5>
    </div>
  </div>
  )
}

export default FetchCard 