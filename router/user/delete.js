let path = require('path');
let router = require('koa-router')();
let Sequelize = require('sequelize');

let dao = require('../../dao/' + path.basename(__dirname));

router.get('/', async function (ctx, next) {

  let query = ctx.request.query;

  let data = await dao.delete(query.id);

  ctx.body = {
    code: 0,
    data: data
  };

});

module.exports = router.routes();
