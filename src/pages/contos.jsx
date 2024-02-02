import ListaContos from "@/components/ListaContos";
import serverApi from "./api/server";
import Head from "next/head";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}shorts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    return {
      props: {
        contos: dados.data,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Contos({ contos }) {
  return (
    <>
      <Head>
        <title>Contos</title>
      </Head>
      <section>
        <h2>Contos</h2>
      </section>
      <ListaContos contos={contos}></ListaContos>
    </>
  );
}
