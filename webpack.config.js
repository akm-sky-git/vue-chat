require("@babel/polyfill");
const path=require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// режимы сборки
const isProd=process.env.NODE_ENV==='production';
const isDev=!isProd;

/* console.log("IS PROD="+isProd);
console.log("IS DEV="+isDev); // режим разработки */

const filename=ext=>isDev ? `bundle.${ext}`:`bundle.[hash].${ext}`;

const jsLoaders = () => {
  const loaders = [
    
    { 
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]
  if (isDev) {
   // loaders.push('eslint-loader')
  }

  return loaders
}

module.exports={
 context:path.resolve(__dirname,'src'),
 mode:'development',
 entry:['@babel/polyfill','./index.js'],
 output:{
     filename:filename('js'),  //'bundel.[hash].js',
     path:path.resolve(__dirname,'dist')
 },
 resolve:{
     extensions:['.js'],
     alias:{
               // import "../../../core/Component"
               // alias import @core/Component
         '@': path.resolve(__dirname,'src'),
         '@core': path.resolve(__dirname,'src/core'),
         vue: 'vue/dist/vue.js'

     }
 },
 devServer:{
   hot:true,
   open:true
  
   
 },
 devtool:isDev ? 'source-map':false,
 optimization: {
    minimizer: [new UglifyJsPlugin({
                  uglifyOptions: {
                    output: {
                      // removing comments
                      comments: false,
                    },
                    compress: {
                     
                      // remove console.logs
                      drop_console: true,
                    },
                  },  
                })
              ],
 },
 plugins:[
     new VueLoaderPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
         template:'index.html',
         minify:{
           removeComments:isProd,      // edit html template isProd=true
           collapseWhitespace:isProd
         }
     }),
     new CopyPlugin({
        patterns: [
          { 
            from: path.resolve(__dirname,'src/favicon.ico'), 
            to: path.resolve(__dirname,'dist')
          }
         
        ],
      }),
      new MiniCssExtractPlugin({
        filename:filename('css')   //'bundel.[hash].ccs'
      })
 ], 
 module: {
      rules: [  
                  {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                  },
             {
                test: /\.s[ac]ss$/i,
                use: [  
                  
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                     
                    }
                  }, 
                        'css-loader',
                        'sass-loader'
                      
                     ],
                  
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders()
                
              }
          ],
  }

}