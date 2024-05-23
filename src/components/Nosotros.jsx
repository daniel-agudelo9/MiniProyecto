import React, { useEffect } from 'react'

const Nosotros = () => {


  useEffect(() => {

    const clickear =()=>{
      console.log('hola')
    }
    window.addEventListener("click",clickear)
    return()=>{
      window.removeEventListener("click",clickear)
    }
  }, [])
  
  return (
    <div className='container'>
      <h1 className='main-title'>Hola mundo</h1>
      <p>Este es el componente</p>
    </div>
  )
}

export default Nosotros



