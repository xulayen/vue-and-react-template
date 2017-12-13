
    let config={
        port:8011,
        log4js:{ 
            type: "dateFile", 
            filename:'E:/AllLog/nodejs/logs/log',
            alwaysIncludePattern: true,
            pattern: "-yyyy-MM-dd.log",
            category:"log_date",
            encoding : 'utf-8'//default "utf-8"，文件的编码
        }
    }

    module.exports=config;