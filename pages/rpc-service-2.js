import Head from 'next/head';
import Link from 'next/link';

// 假设您已经有了一个返回图标的 SVG Component
const ArrowLeftIcon = () => (
    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
    </svg>
);

// 假设您已经有了一个设置图标的 SVG Component
const CogIcon = () => (
    <svg className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.525.32 1.15.54 1.83.65"></path>
    </svg>
);


export default function RpcTester() {
    return (
        // 外层容器：使用 min-h-screen 和 padding 确保页面有留白
        <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
            <Head>
                <title>RPC 服务测试客户端</title>
            </Head>

            {/* 顶部导航和标题 */}
            <header className="mb-8">
                <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600 transition">
                    <ArrowLeftIcon />
                    返回首页
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">
                    StarkNet RPC Service
                </h1>
                <p className="text-gray-500 mt-1">
                    RPC 服务测试客户端
                </p>
            </header>

            {/* 主体内容区域：使用 Grid 布局分成两列 */}
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

                {/* === 左侧：配置区 (Configuration) === */}
                <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">配置 (Configuration)</h2>

                    <div className="space-y-4">
                        {/* 1. RPC 服务地址 */}
                        <div>
                            <label htmlFor="rpc-url" className="block text-sm font-medium text-gray-700 mb-1">
                                RPC 服务地址 (URL/IP:Port)
                            </label>
                            <input
                                id="rpc-url"
                                type="text"
                                value="https://pathfinder.guohongjie.asia/rpc/v0_9"
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                readOnly
                            />
                        </div>

                        {/* 2. RPC 方法名 */}
                        <div>
                            <label htmlFor="rpc-method" className="block text-sm font-medium text-gray-700 mb-1">
                                RPC 方法名
                            </label>
                            <input
                                id="rpc-method"
                                type="text"
                                placeholder="e.g., starknet_getBlockWithTxs"
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            />
                        </div>

                        {/* 3. 请求协议 (示例：下拉菜单) */}
                        <div>
                            <label htmlFor="protocol" className="block text-sm font-medium text-gray-700 mb-1">
                                请求格式 (JSON/XML/Protobuf)
                            </label>
                            <select
                                id="protocol"
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-teal-500 focus:ring-teal-500"
                            >
                                <option>JSON-RPC</option>
                                <option>XML-RPC</option>
                                <option>Protobuf</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* === 右侧：请求体/参数区 (Request Body) === */}
                <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">请求参数 (Request Body)</h2>
                        <CogIcon />
                    </div>

                    {/* JSON 代码编辑区 (使用 textarea 模拟) */}
                    <textarea
                        rows="10"
                        className="flex-grow border-gray-300 rounded-lg shadow-inner font-mono text-sm p-4 bg-gray-50 focus:border-teal-500 focus:ring-teal-500"
                        defaultValue={`{
  "jsonrpc": "2.0",
  "method": "starknet_getBlockWithTxs",
  "params": ["latest"],
  "id": 1
}`}
                    ></textarea>

                    {/* 执行按钮 */}
                    <button className="mt-4 py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md transition duration-150">
                        执行 RPC 测试
                    </button>
                </section>

            </main>

            {/* === 底部：测试结果区 (Test Results) === */}
            <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">测试结果 (Test Results)</h2>

                {/* 状态码显示 */}
                <div className="flex items-center mb-4 space-x-3">
                    <span className="text-base font-medium text-gray-700">状态码 / 错误码:</span>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">
                        200 OK
                    </span>
                    {/* <span className="px-3 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-700">404 NOT FOUND</span> */}
                </div>

                {/* 服务器响应 JSON 区域 */}
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-white text-sm overflow-x-auto">
                    {/* 响应内容 */}
                    <pre className="whitespace-pre-wrap break-words">
                        {`{
  "jsonrpc": "2.0",
  "result": {
    "status": "ACCEPTED_ON_L2",
    "block_number": 98765,
    "transactions": [...]
  },
  "id": 1
}`}
                    </pre>
                </div>

                <p className="mt-4 text-sm text-gray-500">服务器响应</p>
            </section>

        </div>
    );
}