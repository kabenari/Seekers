const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://zenTarg:swarup0225@swarup1.hovsebl.mongodb.net/?retryWrites=true&w=majority")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})