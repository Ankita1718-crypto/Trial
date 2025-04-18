const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World , Hello Mother Nature !! ')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
