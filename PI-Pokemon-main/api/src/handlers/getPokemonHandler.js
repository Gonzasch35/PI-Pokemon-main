const {getPokemonById, getDbId} = require('../controllers/getPokemonById')
const getPokemonByName = require('../controllers/getPokemonByName')
const {getAllPokemons} = require('../controllers/getPokemons')

const {Pokemon} = require('../db')

const deletePokemonHandler = async (req,res) => {
    try {
        const {id} = req.params
        await Pokemon.destroy({where: {id}})
        res.status(200).json(await getAllPokemons())
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getPokemonsHandler = async (req, res) => {
    try {
        const {name} = req.query

        const results = name ? await getPokemonByName(name) : await getAllPokemons()
        results ? res.status(200).json(results) : res.status(400).json('No se encontraron pokemons')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getPokemonHandler = async (req, res) => {
    try {
        const { id } = req.params
        const pokemon = isNaN(id) ? await getDbId(id) : await getPokemonById(id)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createPokemonHandler = async (req, res) => {
    try {
        const {name, image, hp, attack, defense, speed, height, weight, types} = req.body
        const newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight, types})
        await newPokemon.addTypes(types)
        res.status(200).json('Pokemón creado')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getPokemonHandler,
    getPokemonsHandler,
    createPokemonHandler,
    deletePokemonHandler,
} 