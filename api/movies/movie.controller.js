// mock
const db = {
  movies: [
    {
      id: 1,
      title: 'Frozen II',
      desc: '"It hurts to remember，but it\'d be worse to forget."',
      pic: 'http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcpa4kq0yzj20m80wwdng.jpg',
      date: '2019.11',
      rank: 4
    },
    {
      title: 'Gemini Man',
      id: 2,
      location: '上海',
      date: '2019.10.26',
      pic: 'http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcpa5dehqjj20m80wwjvq.jpg',
      rank: 3
    },
    {
      title: 'Catch Me If You Can',
      id: 3,
      location: '上海',
      date: '2020.2.29',
      pic: 'http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcpa8brpdcj209w0e8dh9.jpg',
      rank: 5
    },
    {
      title: 'Forrest Gump',
      id: 4,
      location: '上海',
      date: '2020.2.22',
      pic: 'http://ww1.sinaimg.cn/large/6ca4599fgy1gcpaajooc8j205e07774b.jpg',
      rank: 5
    }
  ]
};

exports.getAll = async ctx => {
  ctx.status = 200;
  ctx.body = db.movies;
};
