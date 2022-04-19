const express = require("express");
const app = express();
const port = 8000;

const pokemons = [
  {
    id: 1,
    name: "Karaclée",
  },
  {
    id: 2,
    name: "Aquali",
  },
  {
    id: 3,
    name: "Raichu",
  },
  {
    id: 4,
    name: "Smogogo",
  },
  {
    id: 5,
    name: "Mr. Mime",
  },
  {
    id: 6,
    name: "Fantominus",
  },
  {
    id: 7,
    name: "Dracofeu",
  },
  {
    id: 8,
    name: "Tortank",
  },
  {
    id: 9,
    name: "Bulbizarre",
  },
  {
    id: 10,
    name: "Salamèche",
  },
  {
    id: 11,
    name: "Carapuce",
  },
];

app.get("/", (req, res) => {
  res.send('Hello World');
});

app.get("/pokemons", (req, res) => {
  const limit = parseInt(req.query.limit ?? 10);
  const firstCharacter = req.query.firstCharacter;

  let filteredPokemons = pokemons;

  if(firstCharacter != null) {
    filteredPokemons = filteredPokemons.filter(pokemon => pokemon.name.startsWith(firstCharacter));
  }
  res.status(200).json(filteredPokemons.filter((pokemon, index) => index < limit));
});

app.get("/pokemons/:id", (req, res) => {
  const {id} = req.params;
  const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id, 10));
  if(pokemon != null) {
    res.status(200).send(pokemon.name);
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
