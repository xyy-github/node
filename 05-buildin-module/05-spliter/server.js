const https = require('https')
const http = require('http')
const cheerio = require('cheerio')

http.createServer((request, response) => {
  response.writeHead(200, {
    'content-type': 'application/json;charset=utf-8'
  })

  const options = {
    protocol: 'https:',
    hostname: 'maoyan.com',
    port: 443,
    path: '/',
    method: 'GET'
  }
  
  const req = https.request(options, (res) => {
    let data = ''
    res.on('data', (chunk) => {
      data += chunk
    })
  
    res.on('end', () => {
      filterData(data)
    })
  })
  
  function filterData(data) {
    let $ = cheerio.load(data)
    let $movieList = $('.movie-item')
    let movies = []
    $movieList.each((index, value) => {
      movies.push({
        title: $(value).find('.movie-title').attr('title'),
        score: $(value).find('.movie-score i').text(),
      })
    })
    
    response.end(JSON.stringify(movies))
  }
  
  req.end()
}).listen(9000)