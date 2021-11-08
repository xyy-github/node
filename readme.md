# Node.Js 学习笔记

## 安装 : https://nodejs.org/zh-cn/ 查看安装成功:node -v

## 运行 :

1. vscode : 点击左侧调试图标，选择运行平台 node
2. vscode :安装插件 run coder, 运行某 JS 文件右键 Run Code

## 简单教程：

node 基础：

- 热身知识

  1. 请求数据
  2. 文件读写
  3. 进程的管理
  4. 网络通信

- Node 相关工具

  1.  NVM :Node Version Manager
      （1） Mac：[安装地址](https://github.com/nvm-sh/nvm/blob/master/README.md)
      对 Mac 安装介绍：( 使用 Git 安装：)
      `cd ~/` 从那时的任何地方 `git clone https://github.com/nvm-sh/nvm.git .nvm`
      `cd ~/.nvm` 并查看最新版本 `git checkout v0.38.0`
      通过从外壳中获取 nvm 来激活它：`. ./nvm.sh`

      现在将这些行添加到您的~/.bashrc、~/.profile 或~/.zshrc 文件中，以便在登录时自动获取：（您可能需要添加到上述多个文件中）
      `cd ~/`从这个地方，查看文件`ls`,查看隐藏文件`ls -a`
      `export NVM_DIR="$HOME/.nvm"[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm [ -s "$NVM_DIR/bash_completion" ] && \. "\$NVM_DIR/bash_completion" # This loads nvm bash_completion`

      验证安装成功：`command -v nvm`：输出：nvm

      （2） Windows：`nvm-windows` `nodist`

  2.  NPM :Node Package Manager
      (1)全局安装 package
      `npm install forever --global （-g）`
      `forever`
      `npm uninstall forever --global`
      `forever`
      全局安装的目录
      Mac: /Users/felix/.nvm/versions/node/nvm 版本/bin
      Windows: c:\users\用户\appData\Roaming\npm\node_modules

- 