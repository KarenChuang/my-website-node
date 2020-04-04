let mongoUrl

const prodUrl = require('./config.json')

if(process.env.NODE_ENV  === 'dev') {
  mongoUrl = 'mongodb://localhost'
} else if (process.env.NODE_ENV  === 'production') {
  mongoUrl = url.prodUrl
}

module.exports = mongoUrl