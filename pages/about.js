// components/AboutPage.js 或 pages/about.js

import React from 'react';
import Head from 'next/head'; // 用于设置页面标题
import Link from 'next/link';

// 导入 CSS Modules 文件，假设您有一个 about.module.css 文件
// import styles from '../styles/about.module.css'; 

function AboutPage() {

    // 假设样式文件中的 mainContainer 类名
    const containerClass = 'about-container';
    const headingClass = 'about-heading';
    const textClass = 'about-text';

    return (
        <>
            {/* 优化 SEO 和浏览器标签栏显示的标题 */}
            <Head>
                <title>关于我们 | Next.js 网站</title>
                <meta name="description" content="了解我们的公司、使命和团队。" />
            </Head>

            {/* 使用 <main> 标签包裹页面的核心内容 */}
            <main className={containerClass}>

                <h1 className={headingClass}>关于我们 (About Us)</h1>

                {/* 第一部分：公司使命/简介 */}
                <section>
                    <h2>🌟 我们的使命</h2>
                    <p className={textClass}>
                        我们致力于提供高质量、创新的解决方案，帮助客户在快速变化的数字世界中取得成功。我们相信技术的力量能够让生活更美好、工作更高效。
                    </p>
                </section>

                {/* 第二部分：团队介绍 */}
                <section>
                    <h2>🤝 我们的团队</h2>
                    <p className={textClass}>
                        我们的团队由一群充满热情、经验丰富的开发者、设计师和策略师组成。我们共同努力，将复杂的挑战转化为简洁、优雅的解决方案。
                    </p>
                </section>

                <hr />

                {/* 导航链接示例 */}
                <p>
                    <Link href="/">
                        返回首页
                    </Link>
                </p>

            </main>
        </>
    );
}

export default AboutPage;