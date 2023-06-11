import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import style from './Form.module.css'
import {validation} from './validation'

const Form = () => {

  const types = useSelector(state => state.allTypes)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(actions.getTypes())
  },[])
  

  const [newPokemon, setNewPokemon] = useState({
    name: '',
    image: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  })

  const [errors, setErrors] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    types: '',
  })

  const handlerChange = (e) => {
    const property = e.target.name
    const value = e.target.value 
    setNewPokemon({...newPokemon, [property]: value})

    validation(property, value, errors, setErrors)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if(!errors.name && !errors.hp && !errors.attack && !errors.defense && !errors.types){
      axios.post('http://localhost:3001/pokemons', newPokemon)
      confirm('Crear pokemón?')
    } else {
      alert('Completa todos los campos')
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h2>Crea a tu pokemón</h2>
          <div>
            <label htmlFor="">*Nombre: </label>
            <input 
              required
              type="text"
              name='name' 
              value={newPokemon.name}
              onChange={handlerChange}
            />
            <h6>{errors.name}</h6>
          </div>
          <div>
            <label htmlFor="">*Imagen: </label>
            <input
              required
              type="url"
              name='image'
              value={newPokemon.image}
              onChange={handlerChange} 
            />
          </div>
          <div>
            <label htmlFor="">*Hp: </label>
            <input
              required
              type="number"
              name='hp'
              value={newPokemon.hp}
              onChange={handlerChange} 
            />
            <h6>{errors.hp}</h6>
          </div>
          <div>
            <label htmlFor="">*Ataque: </label>
            <input
              required 
              type="number"
              name='attack'
              value={newPokemon.attack}
              onChange={handlerChange} 
            />
            <h6>{errors.attack}</h6>
          </div>
          <div>
            <label htmlFor="">*Defensa: </label>
            <input
              required
              type="number"
              name='defense'
              value={newPokemon.defense}
              onChange={handlerChange}
            />
          </div>
          <div>
            <label htmlFor="">Velocidad: </label>
            <input 
              type="number"
              name='speed'
              value={newPokemon.speed}
              onChange={handlerChange} 
            />
          </div>
          <div>
            <label htmlFor="">Altura: </label>
            <input 
              type="number"
              name='height'
              value={newPokemon.height}
              onChange={handlerChange}
            />
          </div>
          <div>
            <label htmlFor="">Peso: </label>
            <input 
              type="number"
              name='weight'
              value={newPokemon.weight}
              onChange={handlerChange}
            />
          </div>
          <div>
            {types.map(type => (
              <button
                className={style[type.name]}
                onClick={e => setNewPokemon({...newPokemon, types: [...newPokemon.types, Number(e.target.value)]})} 
                value={type.id}
                key={type.id}
                type='button'>{type.name}
              </button>))}
              <h6>{errors.types}</h6>
          </div>
          <div>
            <input
              type='submit'
              
            />
          </div>
        </form>
    </div>
  )
}

export default Form