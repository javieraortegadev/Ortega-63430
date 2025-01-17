import React from 'react'

const Item = ({prod}) => {
  
  return (
    <div className="card" style={{width:' 18rem', height:'18rem'}}>
    <img src={prod.img} className="card-img-top" alt={prod.name}/>
    <div className="card-body">
      <h5 className="card-title">{prod.name}</h5>
      <p className="card-text">${prod.price}</p>
    </div>
  </div>
  )
}
export default Item