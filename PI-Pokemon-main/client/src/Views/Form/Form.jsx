import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import style from './Form.module.css'
import {validation} from './validation'

const Form = () => {

  const types = useSelector(state => state.allTypes)
  const [isType, setIsType] = useState({
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    grass: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  })
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

  const handlerTypes = (e) => {
    const property = e.target.name
    if(!newPokemon.types.includes(Number(e.target.value))) {
      setNewPokemon({...newPokemon, types: [...newPokemon.types, Number(e.target.value)]})
    } else {
      const allTypes = newPokemon.types
      const filterTypes = allTypes.filter(type => type !== Number(e.target.value))
      setNewPokemon({...newPokemon, types: filterTypes})
    }
    if (isType[property]) {
      setIsType({...isType, [property]: false})
    } else {
      setIsType({...isType, [property]: true})
    }
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
          <div className={style.formContainer}>
            <h2>Create your Pokemón</h2>

              <div className={style.formDiv}>

                  <div className={style.label_input}>
                    <label htmlFor="">*Nombre: </label>
                    <input 
                      required
                      type="text"
                      name='name' 
                      value={newPokemon.name}
                      onChange={handlerChange}
                    />
                    {errors.name && <h6 className={style.errors}>{errors.name}</h6>}
                  </div>
                  <div className={style.label_input}>
                    <label htmlFor="">*Imagen: </label>
                    <input
                      required
                      type="url"
                      name='image'
                      value={newPokemon.image}
                      onChange={handlerChange} 
                    />
                  </div>

              </div>

              <div className={style.formDiv}>

                  <div className={style.label_input}>
                    <label htmlFor="">*Hp: </label>
                    <input
                      required
                      type="number"
                      name='hp'
                      value={newPokemon.hp}
                      onChange={handlerChange} 
                    />
                    {errors.hp && <h6 className={style.errors}>{errors.hp}</h6>}
                  </div>
                  <div className={style.label_input}>
                    <label htmlFor="">*Ataque: </label>
                    <input
                      required 
                      type="number"
                      name='attack'
                      value={newPokemon.attack}
                      onChange={handlerChange} 
                    />
                    {errors.attack && <h6 className={style.errors}>{errors.attack}</h6>}
                  </div>
              </div>

              <div className={style.formDiv}>

                  <div className={style.label_input}>
                    <label htmlFor="">*Defensa: </label>
                    <input
                      required
                      type="number"
                      name='defense'
                      value={newPokemon.defense}
                      onChange={handlerChange}
                    />
                  </div>
                  <div className={style.label_input}>
                    <label htmlFor="">Velocidad: </label>
                    <input 
                      type="number"
                      name='speed'
                      value={newPokemon.speed}
                      onChange={handlerChange} 
                    />
                  </div>

              </div>

              <div className={style.formDiv}>

                  <div className={style.label_input}>
                    <label htmlFor="">Altura: </label>
                    <input 
                      type="number"
                      name='height'
                      value={newPokemon.height}
                      onChange={handlerChange}
                    />
                  </div>
                  <div className={style.label_input}>
                    <label htmlFor="">Peso: </label>
                    <input 
                      type="number"
                      name='weight'
                      value={newPokemon.weight}
                      onChange={handlerChange}
                    />
                  </div>

              </div>

              <h6>Elige el tipo:</h6>
              <div className={style.typesContainer}>
                {types.map(type => (
                  isType[type.name] ? (
                  <button
                    className={style[type.name]}
                    onClick={e => handlerTypes(e)}
                    value={type.id}
                    key={type.id}
                    name={type.name}
                    type='button'>{type.name}
                  </button>
                  ) : (                  
                  <button
                    className={style.button_type}
                    onClick={e => handlerTypes(e)}
                    value={type.id}
                    key={type.id}
                    name={type.name}
                    type='button'>{type.name}
                  </button>)
                  ))}
                  {errors.types && <h6 className={style.errors}>{errors.types}</h6>}
              </div>

              <div className={style.submit_button}>
                <input
                  type='submit'
                  value='Crear Pokemón'
                />
              </div>

          </div>
        </form>
    </div>
  )
}

export default Form