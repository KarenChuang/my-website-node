const querystring = require('querystring')

const vlogHandle = require('./src/routes/vlog')
const foodHandle = require('./src/routes/food')
const movieHandle = require('./src/routes/movie')

const getPostData = (req, res) => {
  const promise = new Promise((resolve, reject) => {
    if(req.method !== 'POST') {
      resolve({})
      return
    }
    
    if(req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let body = []
    req.on('error', (err) => {
      console.error(err.stack)
    }).on('data', (chunk) => {
      body.push(chunk)
    }).on('end', () => {
      body = Buffer.concat(body).toString()
      if(!body) {
        resolve({})
        return
      }
      resolve(JSON.parse(body))
    })
  })
  return promise
}

const serverHandler = (req, res) => {

  res.setHeader('Content-type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')


  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])

  req.cookie = {}
  const cookieStr = req.headers.cookie || ''
  cookieStr.split(';').forEach(item => {
    if(!item) return
    const key = item.split('=')[0]
    const value = item.split('=')[1]
    req.cookie[key] = value
  })

  console.log(req.cookie);
  

  // 处理post data
  return getPostData(req).then((postData) => {
    req.body = postData

    // foods
    const foodData = foodHandle(req, res)
    if(foodData) {
      foodData.then(response => {
        res.end(JSON.stringify(response))
      })
      return
    }

    // vlogs
    const vlogData = vlogHandle(req, res)
    if(vlogData) {
      res.end(JSON.stringify(vlogData))
      return
    }

    // movies
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

  })

}

module.exports = serverHandler