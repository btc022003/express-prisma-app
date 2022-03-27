const router = require('express').Router(); // 使用router这个API实现express项目的模块化拆分
const db = require('../utils/db');

// query，url直接穿参 ?a=123&b=456
// params，动态路由
// body在post或者put请求的时候使用

router.get('/', async (req, res) => {
  // console.log(req.query);
  const data = await db.user.findMany({ where: {} });
  // console.log(data);
  res.json({
    code: 1,
    data,
    info: '获取人员信息列表',
  });
});

router.post('/', async (req, res) => {
  await db.user.create({
    data: req.body,
  });
  res.json({
    code: 1,
    info: '新增成功',
  });
});

// /users/1/2
router.get('/:id/:name?', (req, res) => {
  console.log(req.params);
  res.json({
    info: '这是people文件中的代码',
  });
});

module.exports = router;
