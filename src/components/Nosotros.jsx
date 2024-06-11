import React, { useEffect } from 'react'
import Dani from '../images/Dani.jpeg'
import Migue from '../images/Migue.jpeg'
import Politica from '../images/Politica.pdf'

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
      <div className='nosotros-container'>
        <h1 className='nosotros-title'>Nosotros</h1>
        <div className='nosotros-content'>
          <section className='intro'>
            <p>
            ¡Bienvenidos a Glamour Gear!<br></br>
            En <strong>Glamour Gear</strong>, nos enorgullece presentarte una exquisita selección de prendas de vestir de alta calidad. Nos dedicamos a ofrecerte moda que no solo es elegante, sino también cómoda y duradera. Desde las últimas tendencias hasta los clásicos atemporales, nuestra colección está diseñada para satisfacer tus gustos más exigentes.
            </p>
          </section>
          <section className='creators'>
            <h2>Nuestros Creadores</h2>
            <div className='creators-cards'>
              <div className='creator-card'>
                <img src={Dani} alt='Daniel Agudelo' className='creator-image' />
                <h3>Daniel Agudelo</h3>
                <p>Co-Fundador y Desarrollador</p>
              </div>
              <div className='creator-card'>
                <img src={Migue} alt='Miguel Vélez' className='creator-image' />
                <h3>Miguel Vélez</h3>
                <p >Co-Fundador y Desarrollador</p>
              </div>
            </div>
          </section>
          <section className='mission'>
            <h2>Nuestra Misión</h2>
            <p>
            Proporcionar a nuestros clientes prendas de vestir de alta calidad que no solo reflejen su estilo personal, sino que también les brinden confianza y comodidad en cada momento de sus vidas. 
            </p>
          </section>
          <section className='vision'>
            <h2>Nuestra Visión</h2>
            <p>
            Convertirnos en el destino de moda preferido a nivel global, reconocido por nuestra calidad excepcional, estilo  y compromiso inquebrantable con la satisfacción del cliente. 
            </p>
          </section>
          <section className='values'>
            <h2>Nuestros Valores</h2>
            <p>
              En <strong>Glamour Gear</strong>, valoramos la buena atención al cliente, la responsabilidad social y ambiental, y la diversidad e inclusión. Estos valores son fundamentales para nuestra marca y guían todas nuestras acciones y decisiones.
            </p>
          </section>
          <section className='values'>
            <h2>Politica de privacidad de datos</h2>
            <p>Puedes descargar el PDF haciendo clic en el siguiente enlace:</p>
            <a href={Politica} download>Descargar PDF</a>
          </section>
        </div>
      </div>
      <div className='flex formContact'>
        <div className='formBuy'>
          <h2 className='main-title'>¡Contactenos!</h2>
          <form className='formulario'>

              <input type="text" required placeholder='Ingrese tu nombre'/>

              <input type="email" required placeholder="Ingrese tu email"/>

              <input type="telephone" required placeholder="Ingrese tu telefono"/>
              
              <div className='send-container'>
                    <button className="enviar" type="submit" >Enviar</button>
                </div>
          </form>
        </div>
    </div>
    </div>
  )
}

export default Nosotros



