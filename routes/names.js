const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('all names')
})

router.get('/new', (req, res) => {
  res.render('names/new', { yourName: 'Damdam' })
})

router.post('/', (req, res) => {
  console.log(req.body.yourName)
  res.send('Create Name')
})

router
  .route('/:myName')
  .get((req, res) => {
    res.status(200).send(`Get ${req.params.myName}`)
  })
  .put((req, res) => {
    res.status(200).send(`Update ${req.params.myName}`)
  })
  .delete((req, res) => {
    res.status(200).send(`Delete ${req.params.myName}`)
  })

module.exports = router
