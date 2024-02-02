import Head from "next/head";
import styled from "styled-components";

export default function Pagina404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Styled404>
        <h1>404 Error</h1>
        <h3>Ops! Essa página não existe</h3>
      </Styled404>
    </>
  );
}
const Styled404 = styled.section`
  text-align: center;
  img {
    max-width: 100%;
  }
  h1 {
    font-family: "Creepster", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 4rem;
    color: #020322;
  }
`;
