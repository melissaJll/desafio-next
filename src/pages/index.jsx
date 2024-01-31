import Menu from "@/components/Menu";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <StyledHome>
        <Head>
          <title>STEPHEN KING - 2024</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
        </Head>
        <Menu></Menu>

        <h1> STEPHEN KING</h1>
        <h3>Livros</h3>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h1 {
    font-family: "Creepster", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 5rem;
    color: #eae5d3;
  }
`;
