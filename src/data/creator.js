var fs = require('fs');
var request = require('sync-request');

var allPokemon = [];
const latestPokemonIndex = 722;
for (let i = 1; i < latestPokemonIndex; i++) {
    const res = request('GET', `http://pokeapi.co/api/v2/pokemon/${i}/`, {
        'headers': {
            'Content-Type': 'application/json'
        }
    });
    const body = JSON.parse(res.getBody('utf-8'));
    let pokemon = {
        id: body.id,
        name: body.name,
        types: body.types.map((type) => type.type.name),
        isVisible: true
    };
    allPokemon[i] = pokemon;
    console.log(`Pokemon ${pokemon.name} completed`);
}

var text = JSON.stringify(allPokemon);
fs.writeFile("/home/angel/Documents/test.json", text, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
