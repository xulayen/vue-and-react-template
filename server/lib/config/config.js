
    let config={
        port:8011,
        log4js:{ 
            type: "dateFile", 
            filename:'./logs/log',
            alwaysIncludePattern: true,
            pattern: "-yyyy-MM-dd.log",
            category:"log_date",
            encoding : 'utf-8'//default "utf-8"，文件的编码
        },

        
        session: {
            secret: 'template',
            key: 'template',
            maxAge: 2592000000
        },
        mongodb: 'http://localhost:8011',

        oracle:{
            user          : process.env.NODE_ORACLEDB_USER || "develop",

            // Instead of hard coding the password, consider prompting for it,
            // passing it in an environment variable via process.env, or using
            // External Authentication.
            password      : process.env.NODE_ORACLEDB_PASSWORD || "develop",
          
            // For information on connection strings see:
            // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
            connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "10.20.31.11/CCN1",
          
            // Setting externalAuth is optional.  It defaults to false.  See:
            // https://oracle.github.io/node-oracledb/doc/api.html#extauth
            externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
        }
        
    }

    module.exports=config;
