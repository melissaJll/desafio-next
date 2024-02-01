import Head from "next/head";
import styled from "styled-components";
import serverApi from "./api/server";
import Link from "next/link";

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
        <h3>Livros</h3>

        {livros.map((livro) => {
          return (
            <article key={livro.id}>
              <Link href={`/books/${livro.id}`}>
                <h3>{livro.Title}</h3>
                <p>{livro.Pages} </p>
              </Link>
            </article>
          );
        })}
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section``;
