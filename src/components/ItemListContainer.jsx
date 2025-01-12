import ItemCount from "./ItemCount"

const onAdd = (cantidad) => {
  alert(`compraste ${cantidad} productos`)
}
const ItemListContainer = (props) => {
    return (
        <div>
          <h1>{props.greeting}</h1>
          Este componente despues lo sacamos
          <ItemCount stock={8} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer