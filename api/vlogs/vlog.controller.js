// mock
const db = {
  vlogs: [
    {
      title: '工作党的周末学习打卡 / 延时记录 / vlog / 首次进军学习区',
      location: 'Shannghai',
      date: '2019-8-19',
      cover: 'http://q78og4x7l.bkt.clouddn.com/6ca4599fgy1gcpa0ohfnhj20h00an16k.jpg?imageslim',
      link: 'http://www.bilibili.com/video/av64397696'
    },
    {
      title: '苏梅岛 Vlog / 海岛旅拍 / Vlog-3 / 慢悠悠的岛上时光',
      date: '2019-5-2',
      location: 'Koh Samui',
      cover: 'http://q78og4x7l.bkt.clouddn.com/6ca4599fgy1gcpa0ohfnhj20h00an16k.jpg?imageslim',
      link: 'http://www.bilibili.com/video/av51163552'
    },
    {
      title: '东京旅行 Vlog / iPhoneX + freevision vilta m拍摄 / 初投稿',
      date: '2018-10-12',
      location: 'Tokyo',
      cover: 'http://q78og4x7l.bkt.clouddn.com/6ca4599fgy1gcpa0ohfnhj20h00an16k.jpg?imageslim',
      link: 'http://www.bilibili.com/video/av51163552'
    },
    {
      title: '澳门旅行 Vlog / DJI Osmo Pocket / Vlog-2',
      date: '2019-1-1',
      location: 'Macao',
      cover: 'http://q78og4x7l.bkt.clouddn.com/6ca4599fgy1gcpa0ohfnhj20h00an16k.jpg?imageslim',
      link: 'https://www.bilibili.com/video/av43903300'
    }
  ]
};

exports.getAll = async ctx => {
  ctx.status = 200;
  ctx.body = {
    data: db.vlogs,
    code: ctx.status,
    msg: 'success'
  }
};
