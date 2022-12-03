import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spiner from './components/Spiner'
import imgCripto from '../src/img/imagen-criptos.png'
import Footer from './components/Footer'

const Contenedor = styled.div`
  max-width: 900px;
  padding: 30px;
  margin: 30px auto 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    margin: 100px auto 0 auto;
  }
  @media (max-width: 380px) {
    padding: 20px;
  }
  @media (max-width: 280px) {
    padding: 20px 10px;
  }
`

const Imagen = styled.img`
  display: block;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 34px;
  text-transform: capitalize;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
  @media (max-width: 992px) {
    margin-top: 80px;
  }
  @media (max-width: 392px) {
    font-size: 28px;
  }
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  //=============== mostrar cotizacion ===============//
  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        setResultado({})
        setCargando(true)
        const { moneda, criptoMoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultados = await respuesta.json()
        const datos = resultados.DISPLAY[criptoMoneda][moneda]
        setResultado(datos)
        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <>
      <Contenedor>
        <Imagen src={imgCripto} alt='imagen' />
        <div>
          <Heading>Cotiza tus criptomonedas al instante</Heading>
          <Formulario setMonedas={setMonedas} />
          {cargando && <Spiner />}
          {Object.keys(resultado).length > 0 && <Resultado resultado={resultado} />}
        </div>
      </Contenedor>

      <Footer />
    </>
  )
}

export default App
