import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
    <>
      <StyledHome>
        <Link href="/">Home</Link>
        <Link href="/livros">Livros</Link>
        <Link href="/contos">Contos</Link>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 2rem;
  a {
    text-decoration: none;
    background-color: #c7380c;
    color: #eae5d3;

    padding: 0.8rem 1rem;

    &:first-child {
      border-top-left-radius: 0.6rem;
      border-bottom-left-radius: 0.6rem;
    }

    &:last-child {
      border-top-right-radius: 0.6rem;
      border-bottom-right-radius: 0.6rem;
    }

    &:hover,
    &:focus {
      background-color: #aa1e1e;

      color: white;
    }

    /* @media screen and (min-width: 700px) {
    } */
  }
`;
