// 路由
import express from 'express'
const router = express.Router(); // 使用express框架自带的路由

const userArr = [];

export default function (app) {
  router.route('/data/user').get((req, res) => { // 查询用户
    res.status(200).json({ code: "200", msg: "admin" });
  });


  router.route('/data/login').post((req, res) => { // 登录
    if (req.body.username == "admin" && req.body.pwd == "123456") {
      res.send(JSON.stringify({ code: "200", msg: '登录成功', token: new Date().getTime() }));
    } else {
      res.send(JSON.stringify({ code: "200", msg: '用户名或密码不正确' }));
    }
  })

  router.route('data/logout').post((req, res) => { // 退出
    res.status(200).json({ code: "200", msg: "用户已退出" });
  });


  router.route('/user/create').post((req, res) => { // 用户添加
    if (req.body.username && req.body.pwd) {
      var { username, pwd } = req.body;
      userArr.push({ username, pwd });
      res.status(200).json({ code: "200", msg: "添加成功" });
    }
  });

  router.route('/user/delete/:id').post((req, res) => { // 用户删除 
    userArr.map(item => {
      return item.id != req.params.id;
    })
    res.send(userArr);
  });

  // 把路由配置在myexpress实例上
  app.use('/api', router);
} 
