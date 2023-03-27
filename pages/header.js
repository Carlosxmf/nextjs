import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    
    <header className={styles.header}>
      <br></br>
      <nav>
        <ul className={styles.header__menu}>
          <li className={styles.header__menu_item}>
            <Link href="/">
              <p className={styles.header__menu_link}>Home</p>
            </Link>
          </li>
          <li className={styles.header__menu_item}>
            <Link href="/articles">
              <p className={styles.header__menu_link}>Notícias</p>
            </Link>
          </li>
          <li className={styles.header__menu_item}>
            <Link href="/contact">
              <p className={styles.header__menu_link}>Contacto</p>
            </Link>
          </li>
        </ul>
      </nav>
      <br></br>
      <br></br>
    </header>
  );
}
