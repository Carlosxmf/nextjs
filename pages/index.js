import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meu Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Bem-vindo ao meu site!</h1>
        <p>
          Aqui pode encontrar as últimas notícias e informações sobre o mundo da
          tecnologia.
        </p>
      </main>

      <Footer />
    </div>
  );
}
