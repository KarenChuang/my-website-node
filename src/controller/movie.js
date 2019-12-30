const getList = () => {
  const resData = {
    "type": "movie",
    "total": 10,
    "list": [
      {
        "id": 1,
        "title": "Frozen II",
        "desc": "\"It hurts to remember，but it'd be worse to forget.\"",
        "pic": "https://d30jecx7p602b2.cloudfront.net/b6bb6d012ccd921f6655c63f40f454ea.jpeg",
        "date": "2019.11",
        "rank": 4,
      },
      {
        "title": "Gemini Man",
        "id": 2,
        "location": "上海",
        "date": "2019.10.26",
        "pic": "https://d30jecx7p602b2.cloudfront.net/24b71ca76468463fa660095cbbeda190.jpeg",
        "rank": 3,
      },
    ]
  }
  return resData
}

module.exports = {
  getList,
}