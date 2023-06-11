import { GET_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_POKEMONS_BY_TYPE, ORDER, GET_TYPES} from "./actions"

let initialState = {
    pokemons: [],
    allPokemons: [],
    pokemonDetail: {},
    allTypes: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return {...state, allPokemons: action.payload, pokemons: action.payload}
        case GET_POKEMON_BY_ID:
            return{...state, pokemonDetail: action.payload}
        case GET_POKEMON_BY_NAME:
            return{... state, allPokemons: [action.payload]}
        case GET_POKEMONS_BY_TYPE:
            const pokemons = state.pokemons
            const pokemonsFilter = action.payload === 'all' ? pokemons : pokemons.filter(pokemon => {
                return pokemon.types.some((type) => type.name === action.payload)
            })
            return {
                ...state, allPokemons: pokemonsFilter
            }
        case ORDER:
            let order = action.payload === "name_asc" ?
                state.pokemons.sort((prev, next) => {
                    if(prev.name > next.name) return -1;
                    if(prev.name < next.name) return 1;
                    return 0;
                }) :
                state.pokemons.sort((prev, next) => {
                    if(prev.name > next.name) return 1;
                    if(prev.name < next.name) return -1;
                    return 0;
                })
            return {
                ...state,
                allPokemons: order
            }
        case GET_TYPES:
            return{... state, allTypes: action.payload}
        default:
            return{
                ...state,
            }
    }
}

export default rootReducer
