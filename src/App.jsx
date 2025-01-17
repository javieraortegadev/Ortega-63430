
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import FetchContainer from './components/FetchContainer' 
import ItemDetailContainer from './components/ItemDetailContainer' 
function App() {
 
const bienvenida = 'Bienvenidos a mi app 😍'
  return (
    <>
      <div>
       <NavBar/>
       <ItemListContainer greeting = 'Bienvenido a la tienda'/> 
       <ItemDetailContainer />
       {/* <FetchContainer/> */}
      </div>
     
     
      
    </>
  )
}

export default App
