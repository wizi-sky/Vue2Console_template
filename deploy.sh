#!/bin/bash
if [ "$1" = "oss" ]
then
    echo "======================⚡⚡⚡开始打包🎦剧场正式服🎦代码⚡⚡⚡ =================="
    npm run build:product
    echo "============================= 📦打包上传OSS结束 ================================="
    echo "============================= 🆕开始更新web版本 ================================="
elif [ "$1" = "test" ]
then
    echo "===================== ⚡⚡⚡开始打包🎦剧场测试服🎦代码⚡⚡⚡ =================="
    npm run build:test
    echo "==============================📦 打包上传OSS结束 ================================"
    echo "==============================🆕 开始更新web版本 ================================"
fi
echo "=============================== 🚀🚀🚀部署完成🚀🚀🚀=============================="
