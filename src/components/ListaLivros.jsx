import Link from "next/link";
import styled from "styled-components";

export default function ListaLivros({ livros }) {
  return (
    <>
      <StyledListaLivros>
        {livros.map((livro) => {
          return (
            <article key={livro.id}>
              <Link href={`/livros/${livro.id}`}>
                <div className="imagem-livros">
                  <img
                    src="https://stephenking.com/images/novel/holly.jpg"
                    alt="Imagem do Livro"
                  />
                  {/* <img
                    src="https://via.placeholder.com/450x300"
                    alt="Imagem do Livro"
                  /> */}
                </div>
                <h3>{livro.Title}</h3>
                <p>Páginas: {livro.Pages} </p>
                <p>Ano de Lançamento: {livro.Year}</p>
                <p>ISBN: {livro.ISBN} </p>
              </Link>

              {/*URL villains */}
              <details>
                <summary>Vilões</summary>
                <div>
                  {livro.villains.map((vilão, index) => (
                    <div key={index}>
                      <p>Nome: {vilão.name}</p>
                      {/* <a href={vilão.url}>
                        Link para informações sobre o vilão
                      </a> */}
                    </div>
                  ))}
                </div>
              </details>
            </article>
          );
        })}
      </StyledListaLivros>
    </>
  );
}

const StyledListaLivros = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 85%;
  margin: auto;

  article {
    background-color: #fffef4;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    border: solid 1px #050f2c73;
    border-radius: 0.5rem;
    transition: transform 200ms;
    width: 100%;

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #d65e2f;
      }
    }
    @media screen and (min-width: 900px) {
      /* background-color: #c49d8d; */
      width: 25%;
    }
  }
  summary {
    cursor: pointer;
    background-color: #d34d35;
    padding: 0.6rem;
    border-radius: 6px;
    color: #f8f6f2;
  }
  details {
    background-color: #fffef4;
    /* padding: 1rem; */
  }
  .imagem-livros {
    display: flex;
    justify-content: center;
  }
`;
