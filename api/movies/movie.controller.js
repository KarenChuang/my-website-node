// mock
const db = {
  movies: [
    {
      id: 1,
      title: 'Frozen II',
      desc: '"It hurts to remember，but it\'d be worse to forget."',
      pic: 'http://q78og4x7l.bkt.clouddn.com/movie-01.jpg?imageslim',
      date: '2019.11',
      rank: 4
    },
    {
      title: 'Gemini Man',
      id: 2,
      location: '上海',
      date: '2019.10.26',
      pic: 'http://q78og4x7l.bkt.clouddn.com/movie-02.jpg?imageslim',
      rank: 3
    },
    {
      title: 'Catch Me If You Can',
      id: 3,
      location: '上海',
      date: '2020.2.29',
      pic: 'http://q78og4x7l.bkt.clouddn.com/movie-03.jpg?imageslim',
      rank: 5
    },
    {
      title: 'Forrest Gump',
      id: 4,
      location: '上海',
      date: '2020.2.22',
      pic: 'http://q78og4x7l.bkt.clouddn.com/movie-04.jpg?imageslim',
      rank: 5
    }
  ]
};

exports.getAll = async ctx => {
  ctx.status = 200;
  ctx.body = {
    data: db.movies,
    code: ctx.status,
    msg: 'success'
  }
};
