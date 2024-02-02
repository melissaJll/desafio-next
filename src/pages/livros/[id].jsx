import styled from "styled-components";

export default function Livro() {
  return (
    <>
      <StyledLivro>
        <h2>Titulo</h2>

        <h3>Categoria</h3>
        <p>Descricao</p>
      </StyledLivro>
    </>
  );
}
const StyledLivro = styled.article``;
