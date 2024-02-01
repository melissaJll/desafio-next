import styled from "styled-components";
import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <>
      <StyledLayout>
        <Menu></Menu>
        <h1> STEPHEN KING</h1>
        <main>{children}</main>
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  h1 {
    font-family: "Creepster", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 5rem;
    color: #eae5d3;
  }
`;
