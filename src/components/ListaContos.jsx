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
  width: 90%;
  margin: auto;

  article {
    background-color: #07173d;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    border: solid 1px #050f2c73;
    border-radius: 0.5rem;
    transition: transform 200ms;
    width: 85%;

    & a {
      text-decoration: none;
      color: white;
    }
    &:hover,
    &:focus {
      background-color: #b42525;
    }
    @media screen and (min-width: 500px) {
      width: 48%;
    }
  }
  details {
    cursor: pointer;
  }
`;
