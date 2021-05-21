console.log("Running Pokedex...")

const pokedex = document.getElementById("pokedex")
//Retrieve the data via the api and return it to the console
const retrievePokemon = () => {
    const promises = [];
    for (let i = 1; i<= 150; i++){
        var url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url, {method: 'GET'}).then(res => res.json()))
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
//Logging information into the console for use later
const displayPokemon = (pokemon) => {
    console.log(pokemon)
    const html = `<li>Bulbasaur</li>`
}

retrievePokemon()