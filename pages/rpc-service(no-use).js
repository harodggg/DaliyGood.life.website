// components/AboutPage.js 或 pages/about.js

import React from 'react';
import Head from 'next/head'; // 用于设置页面标题
import Link from 'next/link';

// 导入 CSS Modules 文件，假设您有一个 about.module.css 文件
// import styles from '../styles/about.module.css'; 

const RpcServices = {
    starknet: "https://pathfinder.guohongjie.asia/rpc/v0_9"
}

function FreeRpcService() {
    return <div>
        <h2>StarkNet RPC Service</h2>
        <p>{RpcServices.starknet}</p>
    </div>;
}

function TestRpcService() {
    return < div class="container" >
        <h2 className="flex items-center justify-center text-blue-600 text-3xl font-bold">RPC 服务测试客户端</h2>
    
    <div class="input-group">
        <label for="service-url">RPC 服务地址 (URL/IP:Port)</label>
        <input type="text" id="service-url" value="http://localhost:8080" placeholder="例如: http://api.example.com/rpc" />
    </div>

    <div class="input-group">
        <label for="method-name">RPC 方法名</label>
        <input type="text" id="method-name" placeholder="例如: UserService.getUserDetails" />
    </div>

    <div class="input-group">
        <label for="request-body">请求参数 (JSON/XML/Protobuf)</label>
        <textarea id="request-body" placeholder='请输入请求体，例如: {"id": 123, "token": "abc"}'></textarea>
    </div>

    <div class="button-group">
        <button >执行 RPC 测试</button>
    </div>

    <h3>测试结果</h3>
    <div class="input-group">
        <label for="status-code">状态码 / 错误码</label>
        <input type="text" id="status-code" readonly placeholder="例如: 200 (OK) / 500 (Internal Error)" />
    </div>
    
    <div class="input-group">
        <label for="result-area">服务器响应</label>
        <textarea id="result-area" readonly placeholder="服务器的响应数据将显示在这里..."></textarea>
    </div>
</div >
}

function RpcService() {

    
    const containerClass = 'about-container';
    const headingClass = 'about-heading';
    const textClass = 'about-text';
    return (
        <>
            {/* 优化 SEO 和浏览器标签栏显示的标题 */}
            <Head>
                <title>RPC 服务</title>
                <meta name="description" content="rpc服务页面，提供RPC服务地址和测试客户端。    " />
            </Head>

            {/* 使用 <main> 标签包裹页面的核心内容 */}
             <main > 
                <h1 className="text-3xl text-blue-600 font-bold underline flex justify-center items-center "> Rpc服务</h1>
                <FreeRpcService />
                <hr />

            
                <TestRpcService />
               
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

export default RpcService;