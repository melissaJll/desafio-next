import ListaLivros from "@/components/ListaLivros";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}books`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: {
        livros: dados.data,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Livros({ livros }) {
  return (
    <>
      <h3>Livros 2</h3>

      <ListaLivros livros={livros} />
    </>
  );
}
