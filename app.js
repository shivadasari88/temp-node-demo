const http = require(`http`)

const server = http.createServer((req,res) =>{
  if (req.url===`/` ){
    res.end(`welcome to home page`)

}
if (req.url===`/about`){
    res.end(`page shown when you chande url to /about`)
}
res.end(
    `
    <h1>oops!</h1>
    <p>we can't find the page what you are looking for</p>
    <a href ="/"> back home</a>
    `
)  
  })


server.listen(5000)