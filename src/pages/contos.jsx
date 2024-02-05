import ListaContos from "@/components/ListaContos";
import serverApi from "./api/server";
import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}shorts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: {
        contos: dados.data,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Contos({ contos }) {
  return (
    <>
      <Head>
        <title>Contos</title>
        <meta name="keywords" content="contos, historias" />
      </Head>
      <StyledContos>
        <h2>Contos</h2>
      </StyledContos>
      <ListaContos contos={contos}></ListaContos>
    </>
  );
}
const StyledContos = styled.section`
  text-align: center;
`;
