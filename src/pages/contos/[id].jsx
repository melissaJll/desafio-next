import styled from "styled-components";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}short/${id}`);
    console.log(id);
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();

    return {
      props: {
        contos: dados.data,
      },
    };
  } catch (error) {
    console.error("Contos não carregados: " + error.message);
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

export default function Livro({ contos }) {
  return (
    <StyledLivro>
      <img
        src="https://stephenking.com/images/novel/holly.jpg"
        alt="Imagem do Livro"
      />
      <div className="info">
        <h2>
          {contos.id}# {contos.title}
        </h2>
        <p>Tipo: {contos.type}</p>

        <p className="descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          eros ut posuere fermentum, elit velit fermentum odio, id luctus ipsum
          nulla ut nisl. Quisque quis sapien felis. Sed viverra eros nisi, ac
          lobortis felis efficitur et.
        </p>
        {/* <p>
          <b>Páginas:</b> {contos.Pages}
        </p>
        <b>
          Indicações:
          {contos.Notes.map((indicacao) => (
            <p> {indicacao}</p>
          ))}
        </b> */}
        {/* 
        <p>
          <b>ISBN:</b> {contos.ISBN}{" "}
        </p>
        <p>
          <b>Ano de Publicação:</b> {contos.Year}{" "}
        </p> */}
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
