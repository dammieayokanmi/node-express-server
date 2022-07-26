const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Welcome to my Server')
})

const nameRouter = require('./routes/names')

app.use('/names', nameRouter)
app.listen(3000)
