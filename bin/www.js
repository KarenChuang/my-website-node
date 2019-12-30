const http = require('http')
const serverHandler = require('../app')

const sever = http.createServer(serverHandler)

const PORT = 8080

sever.listen(PORT)
console.log(`http://localhost:${PORT}`)