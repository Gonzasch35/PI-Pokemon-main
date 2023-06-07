import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getPokemonById} from '../../redux/actions'
import style from './Detail.module.css'

const Detail = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemonDetail)
  console.log(pokemonData);

  useEffect(() => {
    dispatch(getPokemonById(id))
  },[])
  
  
  return (
    <div className={style.detailContainer}>
            <h1 className={style.name}>{pokemonData.name}</h1>

            <div className={style.detailContent}>

              <div>
                <img src={pokemonData.image} alt="" />
              </div>

              <div className={style.datos}>
                <h3>Hp: <span>{pokemonData.hp}</span></h3>
                <h3>Attack: <span>{pokemonData.attack}</span></h3>
                <h3>Defense: <span>{pokemonData.defense}</span></h3>
                <h3>Speed: <span>{pokemonData.speed}</span></h3>
                <h3>Height: <span>{pokemonData.height}</span></h3>
                <h3>Weight: <span>{pokemonData.weight}</span></h3>
                <h3>Tipos: </h3>
                {pokemonData.types?.map(e=> {
                  return (
                    <p>{e.name}</p>
                  )
                  })}
              </div>

            </div>
    </div>
  )
}

export default Detail