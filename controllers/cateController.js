// 检索分类数据
var dbConfig = require('../util/dbconfig')

getCate = (req, res, next) => {
  var sql = 'select * from cate'
  var sqlArr = []
  var callBack = (err, data) => {
    if(err) {
      console.log('index.js error:', err)
    } else {
      console.log('list:', data)
      res.send({'list': data})
      // res.render('index', { title: 'Express' });
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getCate
}