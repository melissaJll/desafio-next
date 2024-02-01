import Head from "next/head";
import styled from "styled-components";
import serverApi from "./api/server";
import Link from "next/link";
import ListaLivros from "@/components/ListaLivros";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/books`);
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

export default function Home({ livros }) {
  return (
    <>
      <Head>
        <title>STEPHEN KING - 2024</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <StyledHome>
        <h3>Home</h3>

        {/* <ListaLivros livros={livros} /> */}
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h1 {
  }
`;
