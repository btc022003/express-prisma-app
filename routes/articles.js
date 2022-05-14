const router = require('express').Router();
const db = require('../utils/db');

router.post('/', async (req, res) => {
  await db.article.create({
    data: {
      ...req.body,
    },
  });
  res.json({
    code: 1,
    data: '文章新增成功',
  });
});

router.get('/', async (req, res) => {
  const data = await db.article.findMany({
    where: {},
    // 关联查询
    include: {
      user: true,
    },
  });
  res.json(data);
});

module.exports = router;
