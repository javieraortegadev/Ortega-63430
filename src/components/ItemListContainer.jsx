import ItemCount from "./ItemCount"
import {getProducts} from "../mock/data"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = (props) => {
  const [productsList, setProductsList] = useState([])
  const [loader, setLoader] = useState(false)
  const {categoryId} = useParams()

  useEffect(()=>{
    //prender el loader
    setLoader(true)
   //llamamos a la promesa
    getProducts()
    //tratamos y la guardamos en un estado
    .then((res)=> {
      if(categoryId){
        const filteredProducts = res.filter((product)=> product.category === categoryId)
        setProductsList(filteredProducts)
      }else{
        setProductsList(res)
      }

    })
    //atrapamos el error
    .catch((error)=> console.log(error, 'error'))
    //apagamos el loader al final
    .finally(()=> setLoader(false))
},[categoryId])
    return (
        <div>
          <h1>{props.greeting} </h1>
          {loader ? <p>Cargando...</p>:<ItemList productsList={productsList}/>}
          
          {/* Este componente despues lo sacamos */}
         
        </div>
    )
}

export default ItemListContainer