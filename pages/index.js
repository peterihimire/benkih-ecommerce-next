import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home | Peter Ihimire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mai}></main>

      <footer className={styles.foote}></footer>
    </div>
  );
}
