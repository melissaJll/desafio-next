import styled from "styled-components";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <>
      <StyledLayout>
        <div className="layout">
          <h1 className="blink_me"> STEPHEN KING</h1>
          <p>
            Monsters are real, and ghosts are real too. They live inside us, and
            sometimes, they win.
          </p>
        </div>
        <Menu></Menu>
        <main>{children}</main>
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  background-color: #001020;

  .blink_me {
    /* animation: blinker 14s ease-out infinite; */
  }

  @keyframes blinker {
    50% {
      opacity: 0;
      color: #ff0000;
    }
  }

  .layout > h1 {
    font-family: "Creepster", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 4rem;
    text-align: center;
    color: #e7e1cc;
    &:hover {
      color: #ec1111;
    }
    @media screen and (min-width: 400px) {
      font-size: 7rem;
    }
  }

  .layout {
    margin: auto;
    padding-top: 4rem;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .layout > p {
    color: #ec1111;
    font-family: "Playfair Display", serif;
    width: 50%;
    color: #eae5d3;
    text-align: center;
  }
  main {
    background-color: #fffbf0;
    border-radius: 3px;
    padding: 2rem;
  }
`;
