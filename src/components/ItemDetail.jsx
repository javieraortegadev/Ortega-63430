import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} al carrito`)
    }
    
  return (
    <div>
        <h1>Detalle de : {item.name}</h1>
        <img src={item.img} alt={item.name}/>
        <p>{item.description}</p>
        <p>Stock disponible:{item.stock} unidades</p>
        <p>Precio: ${item.price}</p>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
    </div>
  )
}
export default ItemDetail