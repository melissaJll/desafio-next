import styled from "styled-components";
import serverApi from "../api/server";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}book/${id}`);
    console.log(id);
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    // console.log(dados);

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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function Livro({ livros }) {
  return (
    <StyledLivro>
      <Image
        width={319}
        height={410}
        src="/images/livro.webp"
        alt="autor stephen king"
      ></Image>
      <div className="info">
        <h2>
          {livros.id}# {livros.Title}
        </h2>

        <p className="descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          eros ut posuere fermentum, elit velit fermentum odio, id luctus ipsum
          nulla ut nisl. Quisque quis sapien felis. Sed viverra eros nisi, ac
          lobortis felis efficitur et.
        </p>
        <p>
          <b>Páginas:</b> {livros.Pages}
        </p>
        <b>
          Indicações:
          {livros.Notes.map((indicacao) => (
            <p> {indicacao}</p>
          ))}
        </b>

        <p>
          <b>ISBN:</b> {livros.ISBN}{" "}
        </p>
        <p>
          <b>Ano de Publicação:</b> {livros.Year}{" "}
        </p>
      </div>
    </StyledLivro>
  );
}

const StyledLivro = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 700px;
  margin: 4rem auto;
  padding: 1rem;
  border: #1719315e 1px solid;
  padding: 3.1rem;
  border-radius: 10px;

  img {
    max-width: 300px;
    height: auto;
  }

  .info {
    flex-grow: 1;
    width: 50%;
  }
  .descricao {
    font-size: 18px;
    margin: 1rem auto;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }
  b {
    color: black;
  }

  .preco {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  @media screen and (min-width: 500px) {
    /* background-color: #c49d8d; */
    img {
      margin-right: 20px;
    }
    .descricao {
      margin: 2rem auto;
    }
  }
`;
