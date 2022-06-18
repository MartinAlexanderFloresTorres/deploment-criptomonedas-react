import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  background: #9497ff;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s ease all;
  &:hover {
    background: #7a7dfe;
  }
`;

function Formulario({setMonedas}) {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elije tu moneda", monedas);
  const [criptoMoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elije tu criptomoneda",
    criptos
  );

  //=============== consultar api ===============//
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCripto = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCripto);
    };
    consultarAPI();
  }, []);

  //=============== validar formulario ===============//
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
      setTimeout(() => {
        if (error === false) {
          setError(false);
        }
      }, 2500);
      return;
    }
    setError(false);
    setMonedas({moneda, criptoMoneda})
  };

  return (
    <>
      {error && <Error>Todo los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type={"submit"} value="Cotizar" />
      </form>
    </>
  );
}

export default Formulario;
