const express = require('express')

const app = express()
const port = 3000

app
  .get('/', (req, res) => {
    res.send('You are on the Homepage')
  })
  .get('/about', (req,res) => {
    res.send('You are on the about page')
  })
  .get('/contact', (req,res) => {
    res.send({
      email: 'narayans4@newpaltz.edu',
      phone: '123-456-7890',
      twitter: '@budweiser',
      instagram:'@abcdef'  })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})