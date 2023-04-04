const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');
const watchList = require('./db.json')

const app = express()

app.use(bodyParser.json());
app.use(express.json())
app.use(express.static(__dirname + '../../public'))

app.get('/movie/:name', (req, res) => {
  const movieName = req.params.name;
});

app.post('/watchlist', (req, res) => {
  const movie = req.body;
  watchList.push(movie);
  res.json(watchList);
});

app.get('/watchlist', (req, res) => {
  res.json(watchList)
})


app.listen(4000, () => console.log("up on 4000"))
