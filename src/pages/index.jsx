import Head from "next/head";
import styled from "styled-components";
import serverApi from "./api/server";
import Link from "next/link";
import ListaLivros from "@/components/ListaLivros";
import Image from "next/image";

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

        <Image
          className="circle-image"
          width={320}
          height={250}
          src="/images/stephen-king.jpg"
          alt="autor stephen king"
        />
        <p>
          Stephen Edwin King was born in Portland, Maine in 1947, the second son
          of Donald and Nellie Ruth Pillsbury King. After his parents separated
          when Stephen was a toddler, he and his older brother, David, were
          raised by his mother. Parts of his childhood were spent in Fort Wayne,
          Indiana, where his father's family was at the time, and in Stratford,
          Connecticut. When Stephen was eleven, his mother brought her children
          back to Durham, Maine, for good. Her parents, Guy and Nellie
          Pillsbury, had become incapacitated with old age, and Ruth King was
          persuaded by her sisters to take over the physical care of the elderly
          couple. Other family members provided a small house in Durham and
          financial support. After Stephen's grandparents passed away, Mrs. King
          found work in the kitchens of Pineland, a nearby residential facility
          for the mentally challenged.
        </p>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  max-width: 700px;
  h1 {
  }
  .circle-image {
    border-radius: 70%; /* faz com que o contêiner tenha a forma de um círculo */
    overflow: hidden; /* garante que a imagem não ultrapasse os limites do círculo */
    display: flex; /* usa flexbox para alinhamento */
    justify-content: center; /* centraliza horizontalmente */
    align-items: center; /* centraliza verticalmente */
  }

  .circle-image img {
    width: auto; /* mantém a proporção da imagem */
    height: auto; /* mantém a proporção da imagem */
  }
`;
