import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-12 min-h-screen w-screen bg-slate-50">
      <Head>
        <title>Daliy Good Life</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <main className="row-start-1 row-span-10 col-start-1 col-span-1 grid grid-cols-3 grid-rows-12">
        <div className="row-start-1 col-start-1 col-span-3 row-span-4 flex flex-col ">
          <div className="flex justify-center">
          <h1 className="text-3xl font-normal text-gray-900 mb-2 md:text-4xl mt-18">Welcome to Daliy Good Life!</h1>
          </div>
            
          <div class="flex  justify-center space-x-2 text-teal-600 mt-4">
              <img src="/logo-no-text.png" alt="Daliy Good Life Logo" className=" w-8 h-8" />
              <span class="text-xl font-bold text-gray-800">DailyGood.life</span>
          </div>
    
        </div>
        <div className="row-start-5 col-start-2 col-span-1 row-span-7 w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 transform transition duration-300 hover:shadow-2xl">
          <div className="mx-auto mb-4 p-4 w-32 h-32">
            <img src="/server-rpc.svg"  className="w-32 h-32 text-teal-600"/>
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">
            RPC Service Portal
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Fast, secure, and reliable access to the network.
          </p>
          <Link href="/rpc-service" className="inline-block w-3/4 py-3 
              bg-teal-600 hover:bg-teal-700 
              text-white 
              font-semibold 
              rounded-lg 
              transition duration-150">
            Access Now
        </Link>
        </div>

      </main>
      <footer className="row-start-11 col-start-1 col-span-1 row-span-2 ">
       
        <div className="flex space-x-4 justify-center mt-4">
          <Link href="/about" className="">
            了解更多关于我们
          </Link>

          <a href="您的 GitHub 链接" target="_blank" className="social-icon github" title="在 GitHub 上查看代码">
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="您的 Discord 链接" target="_blank" className="social-icon discord" title="加入我们的 Discord 社区">
            <i className="fa-brands fa-discord"></i>
          </a>

          <a href="您的 Telegram 链接" target="_blank" className="social-icon telegram" title="订阅我们的 Telegram 频道">
            <i className="fa-brands fa-telegram-plane"></i>
          </a>
        </div>
        <p className="flex justify-center">© 2024 Daliy Good Life. All rights reserved.</p>

      </footer>

    </div>
  );
}
