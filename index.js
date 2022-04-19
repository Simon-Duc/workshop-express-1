const express = require("express");
const app = express();
const port = 8000;

const movies = [
  {
    id: 0,
    name: "Reservoir Dogs",
  },
  {
    id: 1,
    name: "Star Wars",
  },
  {
    id: 2,
    name: "Interstellar",
  },
];

app.get("/", (req, res) => {
  res.send('Hello World');
});

app.get("/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/movies/:id", (req, res) => {
  if(movies.find(movie => movie.id === parseInt(req.params.id, 10))) {
    res.status(200).send(movies[parseInt(req.params.id, 10)].name);
  }
  else {
    res.sendStatus(404);
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
