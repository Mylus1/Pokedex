console.log("Running Pokedex...");

const pokedex = document.getElementById("pokedex");
//Retrieve the data via the api and return it to the console
const retrievePokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
//Converting information gathered into useable data
    Promise.all(promises).then( results => {
        const pokemon = results.map( (data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types
                .map((type) => type.type.name)
                .join(', ')}
        ))
        displayPokemon(pokemon)
    })
};
//Displaying data from api on to the web page using dynamic HTML
const displayPokemon = pokemon => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
      .map(
        pokechan =>
          ` <li class="card"> <img class="card-image" src="${pokechan.image}"/> <h2 class="card-title">${pokechan.id}. ${pokechan.name}</h2> <p class="card-subtitle">Type: ${pokechan.type}</p> </li> `
      )
      .join("");
    pokedex.innerHTML = pokemonHTMLString;
  };

retrievePokemon();
