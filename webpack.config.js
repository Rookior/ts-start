const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/main.ts",
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'main.js',
        assetModuleFilename: 'static/[hash][ext][query]'     
    },
    plugins: [
        // 清空dist文件夹后再生成bundle
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({         
            template: './src/index.html',  //读取模板的入口文件
        }),
    ],
    devServer: {
        contentBase: "./dist",
        open: true,
    },
    resolve: {
        // 路径别名
        extensions: ['.ts','.js', '.vue', '.json'],
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {             
                test: /\.(woff|woff2|eot|ttf|otf|svg|png|svg|jpg|gif)$/,
                dependency: { not: ['url'] },
                use: ['file-loader'],
                type: 'javascript/auto'                        
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf|svg|png|svg|jpg|gif)$/,
            //     type: 'asset/resource'
            // },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude : /node_moudles/
            },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    mode:"development"

}