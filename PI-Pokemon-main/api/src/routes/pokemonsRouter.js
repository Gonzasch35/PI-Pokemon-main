const {Router} = require('express')
const {
    getPokemonsHandler,
    getPokemonHandler,
    createPokemonHandler} = require('../handlers/getPokemonHandler')

const pokemonsRouter = Router()



pokemonsRouter.get('/', getPokemonsHandler)

pokemonsRouter.get('/:id', getPokemonHandler)

pokemonsRouter.post('/', createPokemonHandler)



module.exports = pokemonsRouter;