import ListaLivros from "@/components/ListaLivros";
import serverApi from "./api/server";
import Head from "next/head";
import styled from "styled-components";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}books`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: {
        livros: dados.data,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Livros({ livros }) {
  return (
    <>
      <Head>
        <title>Livros</title>
      </Head>
      <StyledLivros>
        <h3>Livros</h3>
      </StyledLivros>
      <ListaLivros livros={livros} />
    </>
  );
}

const StyledLivros = styled.section`
  text-align: center;
`;
