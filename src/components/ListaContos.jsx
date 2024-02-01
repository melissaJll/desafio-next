import Link from "next/link";
import styled from "styled-components";

export default function ListaContos({ contos }) {
  return (
    <>
      <StyledListaContos>
        {contos.map((conto) => {
          return (
            <article key={conto.id}>
              <Link href={`/books/${conto.id}`}>
                <h3>{conto.title}</h3>
              </Link>
            </article>
          );
        })}
      </StyledListaContos>
    </>
  );
}

const StyledListaContos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin: auto;

  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    border: solid 1px #050f2c73;
    border-radius: 0.5rem;
    transition: transform 200ms;
    width: 43%;

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #d65e2f;
      }
    }
  }
  details {
    cursor: pointer;
  }
`;
