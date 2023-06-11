import React, { useEffect, useState } from 'react'
import {getPokemonByName, getFilterPokemons, getTypes, inOrder} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import style from './SearchBar.module.css'

const SearchBar = ({setOrder}) => {

    const types = useSelector(state => state.allTypes)
    const [name, setName] = useState('')
    
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getTypes())
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleChangeTypes = (e) => {
      dispatch(getFilterPokemons(e.target.value))
    }

    const handleChangeOrder = (e) => {
      dispatch(inOrder(e.target.value))
      setOrder(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(name))
    }

  return (
    <div className={style.searchBarContainer}>
        <div>
          <input onChange={handleChange} type="text" placeholder='pikachu, charmander, etc...' />
          <button type='submit' onClick={handleSubmit}>Buscar</button>
        </div>

        <div>
          <label htmlFor="">Filtrar por: </label>
            <select
            onChange={e => handleChangeTypes(e)}
            >
              <option value='all'>-- Tipos de Pokemóns --</option>
              {types?.map((type) => {
                return (
                <option key={type.id} value={type.name}>{type.name}</option>)
              })}
          </select>
        </div>

        <div>
          <label htmlFor="order">Ordenar por: </label>
          <select
/*             value={order} */
            onChange={e => handleChangeOrder(e)}
          >
            <option value="name_desc">A-Z</option>
            <option value="name_asc">Z-A</option>
            <option value="attack_asc">Ataque ascendente</option>
            <option value="attack_desc">Ataque descendente</option>
          </select>
        </div>
    </div>
  )
}

export default SearchBar