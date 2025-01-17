import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    useEffect (()=>{
        getOneProduct('04')
        .then((res)=> setItem(res))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer