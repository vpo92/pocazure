const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const jsonData = require('./data.json');

console.log(jsonData);


app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API Penelope GB");
})

app.get('/files', (req, res) => {
  res.send(jsonData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
