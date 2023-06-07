import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_POKEMONS_BY_TYPE = "GET_POKEMONS_BY_TYPE"

const URL_SERVER = 'http://localhost:3001/pokemons/'

export const getPokemons = () => {
    return async function (dispatch) {
        const serverData = await axios.get(`${URL_SERVER}`)
        const data = serverData.data
        dispatch({type: GET_POKEMONS, payload: data})
    }
}

export const getPokemonById = (id) => {
    return async function (dispatch) {
        const dataDetail = await axios.get(`${URL_SERVER}${id}`)
        const pokemon = dataDetail.data
        dispatch({type: GET_POKEMON_BY_ID, payload: pokemon})
    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        const byName = await axios.get(`${URL_SERVER}?name=${name}`)
        const pokemon = byName.data
        dispatch({type: GET_POKEMON_BY_NAME, payload: pokemon})
    }
}

