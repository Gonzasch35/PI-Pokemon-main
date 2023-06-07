const axios =require("axios")

const getPokemonByName = async (name) => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
    if(!data) throw Error('No hay pokemons con este nombre')

    const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        type: data.types.map(e=>{return {name: e.type.name}})
    }
    return pokemon;
}

module.exports = getPokemonByName
