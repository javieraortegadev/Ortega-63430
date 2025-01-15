import React from 'react'

const Item = ({product}) => {
    console.log(product, 'product')
  return (
    <div className="card" style={{width:' 18rem', height:'18rem'}}>
    <img src={product.img} className="card-img-top" alt={product.name}/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">${product.price}</p>
    </div>
  </div>
  )
}
export default Item