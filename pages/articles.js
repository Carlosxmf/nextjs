import Header from "./header";
import Footer from "./footer";
import styles from "../styles/articles.module.css";
import Link from 'next/link';

export default function Article({ noticias }) {

  return (
    <div>
      
      <title>Noticias</title> 
      <Header />
      <br></br>  <br></br>  <br></br>  <br></br>
      <div className={styles["articles-container"]}>
        {noticias.items.map((noticia) => (
            <Link href={`/${noticia.sys.id}`}>
          <div key={noticia.fields.title} className={styles["article-card"]}>
            <h1>{noticia?.fields?.title || 'Title not found'}</h1>
            <img
              className={styles.articleImage}
              src={noticia?.fields?.imageUrl || ''}
              alt="Imagem do meu artigo"
            />
            <div
              className={styles.articleContent}
              dangerouslySetInnerHTML={{ __html: noticia?.fields?.content || '' }}
            ></div>
          </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/486dpeeek4xr/environments/master/entries?access_token=XxV_QIMs-RAiz4D3MQW6yXi_8fPXQbCr-hRJzCzhF1w&content_type=noticias&order=-fields.date`
  );

  const data = await res.json();

  if (!data.items) {
    return {
      notFound: true,
    };
  }
 
  return {
    props: {
      noticias: data || null,
    },
  };
  
}
