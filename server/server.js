const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '../../public'))

const key = "b5c615ed"

app.get('/', (req, res) => {
  const movieName = req.params.name;
});
app.post("/watchlist", (req, res) => {
  const movieName = req.body.name;
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  axios.get(url).then((response) => {
    const movieData = response.data;
    watchList.push(movieData);
    res.status(201).send("Movie added to watch list");
  }).catch((error) => {
    console.log(error);
    res.status(500).send("Error adding movie to watch list");
  })
})


app.listen(4000, () => console.log("up on 4000"))