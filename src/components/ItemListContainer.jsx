import ItemCount from "./ItemCount"
import {getProducts} from "../mock/data"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  const [productsList, setProductsList] = useState([])
  const [loader, setLoader] = useState(false)
  

  useEffect(()=>{
    //prender el loader
    setLoader(true)
   //llamamos a la promesa
    getProducts()
    //tratamos y la guardamos en un estado
    .then((res)=> setProductsList(res))
    //atrapamos el error
    .catch((error)=> console.log(error, 'error'))
    //apagamos el loader al final
    .finally(()=> setLoader(false))
},[])
    return (
        <div>
          <h1>{props.greeting}</h1>
          {loader ? <p>Cargando...</p>:<ItemList productsList={productsList}/>}
          
          {/* Este componente despues lo sacamos */}
         
        </div>
    )
}

export default ItemListContainer