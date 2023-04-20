const path = require('path')
const express = require('express')
const router = express.Router()

const classList = [] // our class list array

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// RESTful api                                       //Replace these with async ones in public scripts folder for exercise 7
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})
router.post('/api/create', function (req, res) {
  console.log('Adding the following student:', req.body.student)
  classList.push(req.body.student)
  res.redirect(req.baseUrl)
})
router.post('/api/delete', function (req, res) {
  const id = req.body.studentID
  console.log('this will delete a student entry:', id)
  if (id !== -1) {
    classList.splice(id, 1)
  }
  console.log(classList)
  res.redirect(req.baseUrl + '/delete')
})

router.post('/api/edit', function (req, res) {
  const id = req.body.studentID
  console.log('this will edit a student entry:', id)
  classList[id] = req.body.student
  console.log(classList)
  res.redirect(req.baseUrl + '/edit')
})

module.exports = router
