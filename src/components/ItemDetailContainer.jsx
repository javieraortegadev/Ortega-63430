import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect (()=>{
        getOneProduct(id)
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