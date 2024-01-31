import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <h1> STEPHEN KING</h1>

      <main>{children}</main>
    </>
  );
}
