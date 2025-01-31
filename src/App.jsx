
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import FetchContainer from './components/FetchContainer' 
import ItemDetailContainer from './components/ItemDetailContainer' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
 
const bienvenida = 'Bienvenidos a mi app 😍'
  return (
    <>
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<ItemListContainer greeting = 'Bienvenido a la tienda'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting = 'Categoria: '/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
       </Routes>
       {/* <FetchContainer/> */}
      </BrowserRouter>
     
     
      
    </>
  )
}

export default App
