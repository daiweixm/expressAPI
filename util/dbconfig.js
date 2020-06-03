const mysql = require('mysql')

const config = {
  host: 'iyysz.imwork.net',
  port: '13306',
  user: 'remote',
  password: '1Admin!123',
  database: 'exapp'
}

module.exports = {
  config,
  // 使用连接池
  sqlConnect: (sql, sqlArr, callBack) => {
    var pool = mysql.createPool(config)
    pool.getConnection((err,conn) => {
      console.log('connection ... ')
      if(err) {
        console.log(err)
        return
      }

      // 事件驱动回调
      conn.query(sql, sqlArr, callBack)

      // release conn
      conn.release()
    })
  }
}