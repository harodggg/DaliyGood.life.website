import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* 修复后的样式表链接应该放在这里 */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    crossOrigin="anonymous" // 使用正确的驼峰命名
                    referrerPolicy="no-referrer" // 使用正确的驼峰命名
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}