import { ObjectId } from "mongodb";
import connect from "./contentful";
import { useRouter } from "next/router";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/articleDetail.module.css";
export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <title>{article.title}</title>

      <div className={styles.container}>
        <img
          className={styles.image}
          src={article.imageUrl}
          alt="Imagem do meu artigo"
        />
        <div className={styles.content}>{article.author}</div>
        <div className={styles.content}>{article.content}</div>
        <div className={styles.content}>{article.date}</div>

        <p>{article.content}</p>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const db = await connect();
  const articles = await db.collection("artigos").find().toArray();

  const paths = articles.map((article) => ({
    params: { id: article._id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const db = await connect();
  const article = await db
    .collection("artigos")
    .findOne({ _id: new ObjectId(params.id) });

  return { props: { article: JSON.parse(JSON.stringify(article)) } };
}
