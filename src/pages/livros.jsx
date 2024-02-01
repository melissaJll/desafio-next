import ListaLivros from "@/components/ListaLivros";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}books`);
    const dados = await resposta.json();
    // console.log(dados);

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
      <section>
        <h2>Livros</h2>
      </section>
      {/* <ListaLivros livros={livros} /> */}
    </>
  );
}
