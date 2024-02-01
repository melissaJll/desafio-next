import Menu from "@/components/Menu";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>STEPHEN KING - 2024</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>

      <StyledHome>
        <h3>Livros</h3>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section``;
