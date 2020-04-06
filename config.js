let mongoUrl

const config = require('./config.json')


const url = config.prod

if(process.env.NODE_ENV  === 'dev') {
  mongoUrl = 'mongodb://localhost'
} else if (process.env.NODE_ENV  === 'production') {
  mongoUrl = url
}

module.exports = mongoUrl