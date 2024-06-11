import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src = {producto.imagen} alt={producto.titulo}/>
        <div>
            <h4>{producto.titulo}</h4>
            <p>${producto.precio}</p>
            <div className='ver-mas-container'>
              <Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Item
