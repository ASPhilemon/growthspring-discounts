const express = require('express')
const app = express()

app.use((req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

const PORT = 4500

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
  }
)