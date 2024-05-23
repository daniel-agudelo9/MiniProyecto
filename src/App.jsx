import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import { CartContext, CartProvider } from './context/CartContext'
import Carrito from "./components/Carrito"
import Checkout from './components/Checkout'

function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/productos' element={<ItemListContainer/>}></Route>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}></Route>
            <Route path="/nosotros" element={<Nosotros></Nosotros>}/>
            <Route path="/contacto" element={<Contacto></Contacto>}/>
            <Route path="/carrito" element={<Carrito></Carrito>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
