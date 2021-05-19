console.log("Running Pokedex...")

//Retrieve the data via the api and return it to the console
const retrievePokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url, {method: 'GET'})
        .then(res => res.json())
        
        .then( data => {
            console.log(data);
            const pokemon = {}
            pokemon['name'] = data.name;
            pokemon['id'] = data.id;
            pokemon['image'] = data.sprites['front_default']
            console.log(pokemon)
        })
}

retrievePokemon();