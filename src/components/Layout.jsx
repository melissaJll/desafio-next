import styled from "styled-components";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <>
      <StyledLayout>
        <h1 className="blink_me"> STEPHEN KING</h1>
        <Menu></Menu>
        <main>{children}</main>
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  background-color: #001020;

  .blink_me {
    animation: blinker 14s ease-out infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
      color: #ff0000;
    }
  }

  h1 {
    font-family: "Creepster", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 7rem;
    color: #eae5d3;
    text-align: center;
    padding: 4rem;
    &:hover {
      color: #ec1111;
    }
  }
  main {
    background-color: #fffdf0;
    border-radius: 3px;
    padding: 2rem;
  }
`;
