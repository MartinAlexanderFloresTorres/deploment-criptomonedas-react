import styled from "@emotion/styled";

const Contenido = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 16px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

function Resultado({ resultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenido>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen" />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion de las ultimas 24 horas: <span>{CHANGE24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualizacion <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenido>
  );
}

export default Resultado;
