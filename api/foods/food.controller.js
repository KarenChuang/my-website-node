// mock
const db = {
  foods: [
    {
      title: 'AD Combo',
      id: 1,
      location: '上海',
      restaurant: 'Alimentari & Degusteria',
      date: '2019.8.19',
      pic: 'http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcunmq5rk8j21400u0n0q.jpg',
      tags: ['Brunch']
    },
    {
      title: '三文鱼刺身',
      id: 2,
      location: '上海',
      date: '2019.7.3',
      restaurant: '赤坂亭',
      pic: 'http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcunnvu4wjj23402c0npd.jpg',
      tags: ['日料', '三文鱼']
    }
  ]
}

exports.getAll = async ctx => {
  ctx.status = 200;
  ctx.body = {
    data: db.foods,
    code: ctx.status,
    msg: 'success'
  }
};
