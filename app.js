const querystring = require('querystring')

const vlogHandle = require('./src/routes/vlog')
const foodHandle = require('./src/routes/food')
const movieHandle = require('./src/routes/movie')

const serverHandler = (req, res) => {

  res.setHeader('Content-type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')


  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])

  // vlog
  const vlogData = vlogHandle(req, res)
  if(vlogData) {
    res.end(JSON.stringify(vlogData))
    return
  }


  // food
  const foodData = foodHandle(req, res)
  if(foodData) {
    res.end(JSON.stringify(foodData))
    return
  }

  // movie
  const movieData = movieHandle(req, res)
  if(movieData) {
    res.end(JSON.stringify(movieData))
    return
  }

    
  res.writeHead(404, {
    'Content-type': 'text/plain'
  })
  res.write('404 not found\n')
  res.end()


}

module.exports = serverHandler