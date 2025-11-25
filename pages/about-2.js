import Head from 'next/head';
import Link from 'next/link';

// 假设您使用了一个返回图标的 Component
const ArrowLeftIcon = () => (
    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
);

// 假设您使用了一个使命图标的 Component (🌟)
const MissionIcon = () => (
    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v14m-1.23-1.23l1.23 1.23 1.23-1.23m-1.23 1.23l-1.23 1.23 1.23-1.23"></path>
    </svg>
);

// 假设您使用了一个团队图标的 Component (🤝)
const TeamIcon = () => (
    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-10A4 4 0 013 16V8a4 4 0 014-4h10a4 4 0 014 4v8a4 4 0 01-4 4zm-5-3a3 3 0 100-6 3 3 0 000 6z"></path>
    </svg>
);


export default function AboutUs() {
    return (
        // 外层容器：保持与首页一致的背景和居中风格
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
            <Head>
                <title>关于我们 - Daily Good Life</title>
            </Head>

            {/* 顶部导航 */}
            <header className="mb-10">
                <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600 transition">
                    <ArrowLeftIcon />
                    返回首页
                </Link>
            </header>

            {/* 主体内容：居中且限制宽度 */}
            <main className="w-full max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                    关于我们 (About Us)
                </h1>

                {/* 卡片布局：两列并排 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                    {/* === 1. 我们的使命 (Mission) === */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="flex items-center mb-4 space-x-3">
                            <MissionIcon />
                            <h2 className="text-2xl font-bold text-gray-800">我们的使命</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            我们致力于提供高质量、创新的解决方案，帮助客户在快速变化的数字世界中取得成功。我们相信技术的力量能够让生活更美好、工作更高效。
                        </p>
                    </div>

                    {/* === 2. 我们的团队 (Team) === */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="flex items-center mb-4 space-x-3">
                            <TeamIcon />
                            <h2 className="text-2xl font-bold text-gray-800">我们的团队</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            我们的团队由一群充满热情、经验丰富的开发者、设计师和策略师组成。我们共同努力，将复杂的挑战转化为简洁、优雅的解决方案。
                        </p>
                    </div>

                </div>
            </main>



        </div>
    );
}