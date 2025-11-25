import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daliy Good Life</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <main>
        <h1 className={styles.title}>Welcome to Daliy Good Life!</h1>
        <img src="/daliygoodlife-logo.png" alt="Daliy Good Life Logo" width="800" height="500" />
        <h1 className="text-2xl font-bold underline">
          Hello world!
        </h1>



        <Link href="/rpc-service">
          rpc服务
        </Link>
        <br />  

        <Link href="/about">
          了解更多关于我们
        </Link>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Daliy Good Life. All rights reserved.</p>
        <div class="social-links-container">
          <a href="您的 GitHub 链接" target="_blank" class="social-icon github" title="在 GitHub 上查看代码">
            <i class="fa-brands fa-github"></i>
          </a>

          <a href="您的 Discord 链接" target="_blank" class="social-icon discord" title="加入我们的 Discord 社区">
            <i class="fa-brands fa-discord"></i>
          </a>

          <a href="您的 Telegram 链接" target="_blank" class="social-icon telegram" title="订阅我们的 Telegram 频道">
            <i class="fa-brands fa-telegram-plane"></i>
          </a>
        </div>
      </footer>

    </div>
  );
}
