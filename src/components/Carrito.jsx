import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const hundleVaciar= ()=>{
        vaciarCarrito();
    }

    
  return (
    <div className='carrito'>
      <h1 className='main-title'>Carrito</h1>
      {
        carrito.map((prod)=>(
            <div key={prod.id}>
                <h3>{prod.titulo}</h3>
                <p>Precio unit: ${prod.precio}</p>
                <p>Precio total: ${prod.precio*prod.cantidad}</p>
                <p>Cant: {prod.cantidad}</p>
                <br></br>
            </div>
        ))
      }
      {
        carrito.length>0 &&
        <div>
            <h2>Precio total: {precioTotal()} $</h2>
            <div className='button-container'>
              <button className='empty' onClick={hundleVaciar}>Vaciar</button>
              <Link className='finish' to ="/checkout">Finalizar compra</Link>
            </div>
        </div>
      }
      

      
    </div>
  )
}

export default Carrito
