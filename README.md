使用npm init -y 快速创建项目

使用npm install -D webpack webpack-cli 快速安装依赖到 devDependencies（最后不需要打包的环境依赖安装在这里）

通过添加 script 来实现局部安装webpack 的运行

css 需要添加 style-loader 与 css-loader 才能运行

clean-webpack-plugin : 用于编译时先清空dist文件夹，避免无用垃圾文件

html-webpack-plugin ： 用于生成html文件 并自动引入编译的js

webpack-dev-server : 前端服务器动态监听模块变化并更新

webpack-dev-server编译遇到的问题：Error: Cannot find module 'webpack-cli/bin/config-yargs'

    1.卸载当前的 webpack-cli
        npm uninstall webpack-cli

    2.安装 webpack-cli 3.* 版本 
        npm install webpack-cli@3 -D

webpack使用file-loader加载字体失败

    1.webpack5继续使用file-loader配置： 
        {             
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|svg|jpg|gif)$/,
                dependency: { not: ['url'] },
                use: ['file-loader'],
                type: 'javascript/auto'                        
        }
    2.使用webpack5自带资源配置：
        {
            test: /\.(woff|woff2|eot|ttf|otf|svg|png|svg|jpg|gif)$/,
            type: 'asset/resource'
        },
