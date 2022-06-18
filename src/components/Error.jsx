import styled from "@emotion/styled";

const Texto = styled.p`
  background: #b7322c;
  color: #fff;
  padding: 10px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  font-family: "Lato", sans-serif;
  font-size: 17px;
`;

function Error({ children }) {
  return (<Texto>{children}</Texto>);
}

export default Error;
