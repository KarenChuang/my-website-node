// mock
const db = {
  foods: [
    {
      title: 'AD Combo',
      id: 1,
      location: '上海',
      restaurant: 'Alimentari & Degusteria',
      date: '2019.8.19',
      pic: 'http://q78og4x7l.bkt.clouddn.com/IMG_0128.JPG?imageslim',
      tags: ['Brunch']
    },
    {
      title: '三文鱼刺身',
      id: 2,
      location: '上海',
      date: '2019.7.3',
      restaurant: '赤坂亭',
      pic: 'http://q78og4x7l.bkt.clouddn.com/3921584258112_.pic_hd.jpg?imageslim',
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
