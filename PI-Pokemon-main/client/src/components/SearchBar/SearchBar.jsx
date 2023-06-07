import React, { useState } from 'react'
import {getPokemonByName} from '../../redux/actions'
import { useDispatch } from 'react-redux'

const SearchBar = ({filtro, setFiltro, order, setOrder}) => {

    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(name))
    }

  return (
    <div>
        <div>
          <input onChange={handleChange} type="text" placeholder='pikachu, charmander, etc...' />
          <button type='submit' onClick={handleSubmit}>Buscar</button>
        </div>

        <div>
          <label htmlFor="">Filtrar por: </label>
            <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            >
              <option value=''>-- Tipos de Pokemóns --</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="steel">Steel</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="fairy">Fairy</option>
              <option value="unknown">Unknown</option>
              <option value="shadow">Shadow</option>
          </select>

          <label htmlFor="order">Ordenar por: </label>
          <select 
            name="order"
            value={order}
            onChange={e => setOrder(e.target.value)}
          >
            <option value="name_desc">Nombre descendente</option>
            <option value="name_asc">Nombre ascendente</option>
            <option value="attack_asc">Ataque ascendente</option>
            <option value="attack_desc">Ataque descendente</option>
          </select>
        </div>
    </div>
  )
}

export default SearchBar