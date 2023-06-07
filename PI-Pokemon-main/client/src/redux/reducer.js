import { GET_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME} from "./actions"

const initialState = {
    allPokemons: [],
    pokemonDetail: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POKEMONS:
            return {...state, allPokemons: action.payload}
        case GET_POKEMON_BY_ID:
            return{...state, pokemonDetail: action.payload}
        case GET_POKEMON_BY_NAME:
            return{... state, allPokemons: [action.payload]}
        default:
            return{
                ...state,
            }
    }
}

export default rootReducer
