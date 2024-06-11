

const ItemCount = ({cantidad,handleRestar,handleSumar,handleAgregar}) => {

  return (
    <div>
      <div className='item-count'>
        <button id="less" onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button id="more" onClick={handleSumar}>+</button>
      </div>
      <button id="add" className='agregar-al-carrito'  onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount

