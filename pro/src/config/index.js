// 1.声明变量通过  process.env.VUE_APP_ENV  接收不同环境传递的API
const environment = process.env.VUE_APP_ENV 
// 2.声明变量导入具体环境变量
const config = require('./env.' + environment)
// 3.导出文件
module.exports = config