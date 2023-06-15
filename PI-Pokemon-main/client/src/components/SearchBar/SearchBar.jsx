import React, { useEffect, useState } from 'react'
import {getPokemonByName, getFilterPokemons, getTypes, inOrder, getApiOrDb, inOrderAttack} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import style from './SearchBar.module.css'

const SearchBar = ({setOrderName, setOrderAttack, setCreated, setType, setCurrentPage}) => {

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
      setType(e.target.value)
      setOrderName(e.target.value)
      setCurrentPage(1)
    }

    const handleOrderName = (e) => {
      dispatch(inOrder(e.target.value))
      setOrderName(e.target.value)
      setCurrentPage(1)
    }

    const handleOrderAttack = (e) => {
      dispatch(inOrderAttack(e.target.value))
      setOrderAttack(e.target.value)
    }

    const handlerCreated = (e) => {
      dispatch(getApiOrDb(e.target.value))
      setType('all')
      setCreated(e.target.value)
      setOrderName(e.target.value)
      setCurrentPage(1)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(name))
    }

  return (
    <div className={style.searchBarContainer}>
        <div className={style.search_name}>
          <input className={style.search_input} onChange={handleChange} type="text" placeholder='pikachu, charmander, etc...' />
          <input className={style.search_button} type='submit' onClick={handleSubmit} value='Buscar'/>
        </div>

        <div className={style.filters}>
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

        <div className={style.filters}>
          <label htmlFor="">Buscar por origen: </label>
          <select onChange={e => handlerCreated(e)}>
            <option value="api">API</option>
            <option value="db">DB</option>
          </select>
        </div>

        <div className={style.filters}>
          <label htmlFor="order">Ordenar por: </label>
          <select
            onChange={e => handleOrderName(e)}
          >
            <option value="name_desc">A-Z</option>
            <option value="name_asc">Z-A</option>
          </select>
          <select onChange={e => handleOrderAttack(e)}>
            <option value="attack_asc">Ataque ascendente</option>
            <option value="attack_desc">Ataque descendente</option>
          </select>
        </div>
    </div>
  )
}

export default SearchBar