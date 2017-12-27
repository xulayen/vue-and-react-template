# Welcome to webpack-for-react-vue-template

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
build
    build.js	
    #build config
    check-versions.js	
    #版本控制
    utils.js	
    #默认工具
    vue-loader.conf.js	
    #vue配置
    webpack.base.conf.js	
    #基础配置默认包含react配置
    webpack.dev.conf.js	
    #开发环境下使用
    webpack.prod.conf.js
    #正式环境下使用
config
static
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
```