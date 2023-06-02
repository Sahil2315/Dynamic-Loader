const express = require('express')
const app = express()
const path = require('path')

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.use(express.static(path.join(__dirname)))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/getfacts', async (req, res) => {
    await sleep(3000)
    res.send({'cont': "Lorem Ipsum ....."})
})

app.listen(5000)