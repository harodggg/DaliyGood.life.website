import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daliy Good Life</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Welcome to Daliy Good Life!</h1>
        <img src="/daliygoodlife-logo.png" alt="Daliy Good Life Logo" width="800" height="500" />
        <Link href="/about">
          了解更多关于我们
        </Link>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Daliy Good Life. All rights reserved.</p>
      </footer>

    </div>
  );
}
