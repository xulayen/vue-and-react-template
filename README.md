# Welcome to webpack-for-react-template

## 模版下载
``` bash
$ git clone https://github.com/xulayen/webpack-for-react-template.git && cd webpack-for-react-template
```

## 模版安装

``` bash
$ npm i
```

## 开发

``` bash
$ npm run start
```

## 打包

``` bash
$ npm run build
```

## 启动后端服务

``` bash
$ npm run server
```

## 打包之后访问

http://127.0.0.1:8011/

## 文件结构
``` bash
node_modules
server
    config
        config.js
        # config file
    router
        router.js
        # router file
    static
        # All the resource files that are generated after the site is released
    Util
        until.js
        # until file
    index.html
        # script build the file
    server.js
        # start a nodejs server 
src
    components
        # Store the directory of the project components
    data
        # website resource files eg. mp3 file or and so on
    flux
        # use flux to get or set data flow
    page
        # website page components
    static
        # src resource files
    template
        # html template
    index.js
        # app entryn file
.babelrc
    # .babelrc file
package.json
webpack.common.js
    # common modules config
webpack.dev.js
    # dev modules config
webpack.prod.js
    # prod modules config
```


    //    "babel-core": "^6.26.0",
    // "babel-preset-es2015": "^6.24.1",
    // "babel-preset-react": "^6.24.1",
    // "babel-preset-stage-0": "^6.24.1",