import Menu from "@/components/Menu";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/books`);
    const dados = await resposta.json();
    // console.log(dados);

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    return {
      props: {
        posts: dados.data,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts }) {
  const [listaDePosts, setListaDePosts] = useState(posts);

  return (
    <>
      <Head>
        <title>STEPHEN KING - 2024</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <StyledHome>
        <h1> STEPHEN KING</h1>
        <h3>Livros</h3>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <Link href={`/books/${post.id}`}>
                <h3>{post.Title}</h3>
                <p>{post.Pages} </p>
              </Link>
            </article>
          );
        })}
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h1 {
    font-family: "Creepster", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 5rem;
    color: #eae5d3;
  }
`;
