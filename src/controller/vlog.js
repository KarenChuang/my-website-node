// 只关心数据
const getList = () => {
  const resData = {
    "type": "vlog",
    "total": 10,
    "list": [
      {
        "title": "工作党的周末学习打卡 / 延时记录 / vlog / 首次进军学习区",
        "location": "Shannghai",
        "date": "2019-8-19",
        "cover": "https://karen-z.s3-us-west-1.amazonaws.com/7591566869429_.pic.jpg",
        "link": "http://www.bilibili.com/video/av64397696"
      },
      {
        "title": "苏梅岛 Vlog / 海岛旅拍 / Vlog-3 / 慢悠悠的岛上时光",
        "date": "2019-5-2",
        "location": "Koh Samui",
        "cover": "https://karen-z.s3-us-west-1.amazonaws.com/vlog-1.jpg",
        "link": "http://www.bilibili.com/video/av51163552"
      },
      {
        "title": "东京旅行 Vlog / iPhoneX + freevision vilta m拍摄 / 初投稿",
        "date": "2018-10-12",
        "location": "Tokyo",
        "cover": "https://s3.us-west-1.amazonaws.com/karen-z/vlog-2.jpg",
        "link": "http://www.bilibili.com/video/av51163552"
      },
      {
        "title": "澳门旅行 Vlog / DJI Osmo Pocket / Vlog-2",
        "date": "2019-1-1",
        "location": "Macao",
        "cover": "https://karen-z.s3-us-west-1.amazonaws.com/vlog-3.jpg",
        "link": "https://www.bilibili.com/video/av43903300"
      },
    ]
  }
  return resData
}

module.exports = {
  getList,
}