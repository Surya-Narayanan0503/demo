require('dotenv').config();
const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env);

app
  .get('/', (req, res) => {
    res.send('You are on the Homepage')
  })
  .get('/api/', (req,res) => {
    res.send('You are at the root of API. FOr the best class ever - ' + process.env.BEST_CLASS_EVER')
  })
  .use('/api/users', usersController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})