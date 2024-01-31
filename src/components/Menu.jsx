import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
    <>
      <StyledHome>
        <Link href="/">Livros</Link>
        <Link href="/contos">Contos</Link>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.nav`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    background-color: black;
    padding: 0.8rem 1rem;
    color: white;
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
      background-color: white;
      color: black;
    }

    /* @media screen and (min-width: 700px) {
    } */
  }
`;
