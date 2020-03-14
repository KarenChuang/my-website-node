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
        "cover": "http://ww1.sinaimg.cn/large/6ca4599fgy1gcpa0ohfnhj20h00an16k.jpg",
        "link": "http://www.bilibili.com/video/av64397696"
      },
      {
        "title": "苏梅岛 Vlog / 海岛旅拍 / Vlog-3 / 慢悠悠的岛上时光",
        "date": "2019-5-2",
        "location": "Koh Samui",
        "cover": "http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcpa2irgd4j22yo1uonj5.jpg",
        "link": "http://www.bilibili.com/video/av51163552"
      },
      {
        "title": "东京旅行 Vlog / iPhoneX + freevision vilta m拍摄 / 初投稿",
        "date": "2018-10-12",
        "location": "Tokyo",
        "cover": "http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcpa2irgd4j22yo1uonj5.jpg",
        "link": "http://www.bilibili.com/video/av51163552"
      },
      {
        "title": "澳门旅行 Vlog / DJI Osmo Pocket / Vlog-2",
        "date": "2019-1-1",
        "location": "Macao",
        "cover": "http://ww1.sinaimg.cn/mw690/6ca4599fgy1gcpa313zy6j22yo1uotsy.jpg",
        "link": "https://www.bilibili.com/video/av43903300"
      },
    ]
  }
  return resData
}

module.exports = {
  getList,
}