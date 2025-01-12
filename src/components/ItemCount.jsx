import React from 'react'
import{useState} from 'react'
const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }
       
    }
    const sustract = () => {
        if (count > 0){
            setCount(count - 1)
        }
       
    }
    console.log('valor', count)
  return (
    <div>
    <div>
        <button onClick={sustract}>-</button>
        <span>{count}</span>
        <button onClick={add}disabled={count === stock}>+</button>
    </div>
    <button disabled= {stock === 0 || count === 0} onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount