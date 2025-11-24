import Head from "next/head";
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
      </main>

    </div>
  );
}
