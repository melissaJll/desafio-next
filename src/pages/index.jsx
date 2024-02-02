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
        <p className="saudacao">
          <span>Bem-vindo</span> ao Universo de Stephen King! Explore o mundo
          sombrio e intrigante criado por Stephen King, onde o
          <span> terror</span> se mistura ao suspense em <span>histórias</span>{" "}
          envolventes que desafiam a imaginação. Prepare-se para mergulhar em
          tramas complexas e personagens icônicos que prendem sua atenção do
          início ao <span>Fim</span>.
        </p>

        <h1>O Autor</h1>
        {/* 
        <Image
          className="circle-image"
          width={320}
          height={250}
          src="/images/stephen-king.jpg"
          alt="autor stephen king"
        /> */}
        <Image
          className="circle-image"
          width={340}
          height={320}
          src="/images/stephen-king-gq.webp"
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
        <p>
          Stephen attended the grammar school in Durham and then Lisbon Falls
          High School, graduating in 1966. From his sophomore year at the
          University of Maine at Orono, he wrote a weekly column for the school
          newspaper, THE MAINE CAMPUS. He was also active in student politics,
          serving as a member of the Student Senate. He came to support the
          anti-war movement on the Orono campus, arriving at his stance from a
          conservative view that the war in Vietnam was unconstitutional. He
          graduated from the University of Maine at Orono in 1970, with a B.A.
          in English and qualified to teach on the high school level. A draft
          board examination immediately post-graduation found him 4-F on grounds
          of high blood pressure, limited vision, flat feet, and punctured
          eardrums.
        </p>
        <p>
          He and Tabitha Spruce married in January of 1971. He met Tabitha in
          the stacks of the Fogler Library at the University of Maine at Orono,
          where they both worked as students. As Stephen was unable to find
          placement as a teacher immediately, the Kings lived on his earnings as
          a laborer at an industrial laundry, and her student loan and savings,
          with an occasional boost from a short story sale to men's magazines.
        </p>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  max-width: 1000px;
  margin: auto;
  h1 {
    color: #b1936b;
  }
  p {
    padding-right: 1rem;
    color: #997039;
    letter-spacing: 1px;
    line-height: 23px;
  }
  span {
    font-weight: bold;
    font-size: 20px;
    color: #a31e07;
  }
  .saudacao {
    margin: 5rem auto;
    text-align: center;
    letter-spacing: 4px;
    line-height: 24px;
  }
  .circle-image {
    border-radius: 70%; /* faz com que o contêiner tenha a forma de um círculo */
    overflow: hidden; /* garante que a imagem não ultrapasse os limites do círculo */
    /* display: flex; usa flexbox para alinhamento */
    /* justify-content: center; centraliza horizontalmente */
    /* align-items: center; centraliza verticalmente */
    float: right;
  }

  .circle-image img {
    width: auto; /* mantém a proporção da imagem */
    height: auto; /* mantém a proporção da imagem */
    margin: 1rem;
    margin-bottom: 10rem;
  }
`;
