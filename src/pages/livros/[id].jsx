import styled from "styled-components";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const resposta = await fetch(`${serverApi}book/${id}`);
    console.log(id);
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    console.log(dados);

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
      <img
        src="https://stephenking.com/images/novel/holly.jpg"
        alt="Imagem do Livro"
      />
      <div className="info">
        <h2>
          {livros.id}# {livros.Title}
        </h2>
        <p>Ano de Publicação: {livros.Year} </p>
        <p className="preco">R$ 200</p>
        <p className="descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          eros ut posuere fermentum, elit velit fermentum odio, id luctus ipsum
          nulla ut nisl. Quisque quis sapien felis. Sed viverra eros nisi, ac
          lobortis felis efficitur et.
        </p>

        <p>ISBN: {livros.ISBN} </p>
      </div>
    </StyledLivro>
  );
}

const StyledLivro = styled.article`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 690px;
  margin: 2rem auto;
  padding: 1rem;

  img {
    max-width: 300px;
    height: auto;
    margin-right: 20px;
  }

  .info {
    flex-grow: 1;
    width: 50%;
  }
  .descricao {
    font-size: 18px;
    margin-top: 2rem;
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

  .preco {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
`;
