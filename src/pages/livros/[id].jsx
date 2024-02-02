import styled from "styled-components";

const Livro = () => {
  return (
    <StyledLivro>
      <img
        src="https://stephenking.com/images/novel/holly.jpg"
        alt="Imagem do Livro"
      />
      <div className="info">
        <h2>#1 Titulo</h2>
        <p>Ano de Publicação: 1999</p>
        <p className="preco">R$ 200</p>
      </div>
      <p className="descricao">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        eros ut posuere fermentum, elit velit fermentum odio, id luctus ipsum
        nulla ut nisl. Quisque quis sapien felis. Sed viverra eros nisi, ac
        lobortis felis efficitur et.
      </p>
    </StyledLivro>
  );
};

const StyledLivro = styled.article`
  display: flex;
  flex-wrap: wrap;
  max-width: 690px;
  margin: 0 auto;
  padding: 1rem;

  img {
    max-width: 300px;
    height: auto;
    margin-right: 20px;
  }

  .info {
    flex-grow: 1;
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

  .descricao {
    font-size: 18px;
    margin-top: 20px;
    width: 100%;
  }

  .preco {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
`;

export default Livro;
