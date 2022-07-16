const path=require('path')
const webpackHtmlPlugin=require("html-webpack-plugin");

module.exports={
    entry: {
        index: './src/index.js',        
      },
    output:{
        path:path.resolve(__dirname,"/dist"),
        filename:'bundle.js',
        publicPath:"/"
    },
    devServer:{
        port:3010
    }
    ,
    plugins:[
        new webpackHtmlPlugin({
            template:"./public/index.html",
            filename:"index.html"
        })
    ],
    resolve:{
        extensions:['.js','.jsx']
    },
  module:{
    rules:[
       {
         test: /\.(js|jsx)$/,
         exclude:"/node_modules/",
         use:{
            loader:"babel-loader"
         }
         
        },
        {
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test:/\.html$/,
            use:{
                loader:'html-loader'
            }
        }
    ]
  }
}