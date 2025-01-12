
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
 
const bienvenida = 'Bienvenidos a mi app 😍'
  return (
    <>
      <div>
       <NavBar/>
       <ItemListContainer greeting = 'Bienvenido a la tienda'/>
      </div>
     
     
      
    </>
  )
}

export default App
