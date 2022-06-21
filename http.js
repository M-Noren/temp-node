const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
      res.write('Welcome to the cum zone')
    }
    if(req.url === '/about'){
        res.write('Here is our about page.')
    }
    res.end(`
    <h1>Oops!</h1>

    <p>We can't find the page you're looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)