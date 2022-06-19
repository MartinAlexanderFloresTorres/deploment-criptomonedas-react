import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  background: #fff;
  color: #000;
`;

function useSelectMonedas(label, opciones) {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select 
        value={state} 
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectMonedas];
}

export default useSelectMonedas;
