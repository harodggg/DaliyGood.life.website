import Head from "next/head";
import Link from 'next/link';
// 如果您没有使用 styles/Home.module.css 中的特殊样式，可以移除这行，完全依赖 Tailwind
// import styles from "../styles/Home.module.css"; 

export default function Home() {
    return (
        // 1. 外层容器：使用 Flex column 实现垂直居中，min-h-screen 撑满高度，bg-slate-50 背景色
        <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center py-10 px-4">
            <Head>
                <title>Daily Good Life</title>
                <link rel="icon" href="/favicon.ico" />
                {/* 确保 FontAwesome 已在 _document.js 中加载，或者在这里引入（不推荐在 Head 中引入 CSS，但为了演示保留注释） */}
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" /> */}
            </Head>

            {/* 2. 头部区域：Logo 和 标题 */}
            <header className="text-center mb-10">
                <h1 className="text-3xl font-light text-gray-900 mb-4 md:text-4xl">
                    Welcome to Daily Good Life!
                </h1>

                <div className="flex items-center justify-center space-x-3 text-teal-600">
                    {/* Logo 图片 */}
                    <img src="/logo-no-text.png" alt="Daily Good Life Logo" className="w-8 h-8 object-contain" />
                    {/* Logo 文字 */}
                    <span className="text-xl font-bold text-gray-800">DailyGood.life</span>
                </div>
            </header>

            {/* 3. 卡片区域：使用 max-w-sm 限制宽度，确保精致感 */}
            <main className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 transform transition duration-300 hover:shadow-2xl">

                {/* 图标容器：使用内联 SVG 以便 text-teal-600 生效 */}
                <div className="mx-auto mb-6 p-4 w-24 h-24 flex items-center justify-center rounded-full bg-teal-50 border-2 border-teal-100 text-teal-600">
                    {/* 这里直接放入 SVG 代码，而不是 img 标签 */}
                    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="7" rx="2" ry="2" />
                        <rect x="2" y="14" width="20" height="7" rx="2" ry="2" />
                        <circle cx="6" cy="6.5" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="6.5" r="1.5" fill="currentColor" />
                        <circle cx="18" cy="6.5" r="1.5" fill="currentColor" />
                        <circle cx="6" cy="17.5" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="17.5" r="1.5" fill="currentColor" />
                        <circle cx="18" cy="17.5" r="1.5" fill="currentColor" />
                    </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    RPC Service Portal
                </h2>

                <p className="text-sm text-gray-500 mb-8">
                    Fast, secure, and reliable access to the network.
                </p>

                <Link href="/rpc-service-2" className="inline-block w-full py-3 
              bg-teal-600 hover:bg-teal-700 
              text-white 
              !text-white
              font-semibold 
              rounded-lg 
              transition duration-150 shadow-md hover:shadow-lg">
                    Access Now
                </Link>
            </main>
           

            {/* 4. 页脚区域 */}
            <footer className="mt-12 text-center space-y-4">
                <div className="flex items-center justify-center space-x-6 text-gray-500">
                    <Link href="/about-2" className="hover:text-teal-600 transition-colors text-sm   !text-gray-400">
                        了解更多关于我们
                    </Link>

                    {/* 社交图标链接 */}
                    <a href="https://github.com/harodggg/DaliyGood.life.website" target="_blank" className="hover:text-teal-600 transition-colors   !text-gray-400" title="GitHub">
                        <i className="fa-brands fa-github text-lg"></i>
                    </a>
                    <a href="#" target="_blank" className="hover:text-teal-600 transition-colors   !text-gray-400" title="Discord">
                        <i className="fa-brands fa-discord text-lg"></i>
                    </a>
                    <a href="https://t.me/+V0EHRK5yI9xlZjQ1" target="_blank" className="hover:text-teal-600 transition-colors   !text-gray-400 " title="Telegram">
                        <i className="fa-brands fa-telegram-plane text-lg"></i>
                    </a>
                </div>

                <p className="text-xs text-gray-400">
                    © 2024 Daily Good Life. All rights reserved.
                </p>
            </footer>

        </div>
    );
}