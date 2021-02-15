import express from 'express'
import bodyParser from 'body-parser'
import util from 'util'
import logger from '../util/logger'

export default () => {
  var app = express();

  // 使用promise方式将app.listen导出到外边
  app.listenAsync = util.promisify(app.listen); // node8.x提供的

  // 跨域处理
  var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
  };
  app.use(allowCrossDomain);
  logger.warn('配置跨域处理');

  app.use(bodyParser.json()); // 解析前端发送的json数据
  app.use(bodyParser.urlencoded({ extended: true })); // 解析前端发送的表单数据

  // 定义接口 http://localhost:3000
  app.get("/", function (req, res) {
    res.send("index"); // 接口返回字符串
  })
  // 把my.route.js关联到app实例上
  require('../data')(app); 

  logger.warn('配置路由'); 
  return app; // 返回promise
}