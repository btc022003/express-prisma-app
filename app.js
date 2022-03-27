const express = require('express'); // 引入
const app = express();

app.use(express.json()); // 允许express解析json格式的请求体数据

// 定义一个最基础的访问
app.get('/', (req, res) => {
  // res.send('你好 小黑！');
  res.json({
    code: 1,
    info: 'Hello World!',
  });
});

app.post('/', (req, res) => {
  console.log(req.body); // req.body 表示获取请求体中的数据
  res.json({
    code: 1,
    info: '新增数据成功',
  }); // 返回有一个json数据
});

// use使用一个中间件
app.use('/users', require('./routes/people'));

// 监听指定的端口号
app.listen(3003, () => console.log('server is running on 3003'));
