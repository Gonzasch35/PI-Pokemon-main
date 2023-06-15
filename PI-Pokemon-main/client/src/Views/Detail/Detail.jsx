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

            <div className={style.detailContent}>

              <div className={style.image}>
                <img src={pokemonData.image} alt="" />
              </div>

              <div className={style.datos}>
                <div>
                    <h1 className={style.name}>{pokemonData.name}</h1>
                </div>
                <div className={style.stats}>
                    <h3>Hp: </h3>
                    <span>{pokemonData.hp}</span>
                    <h3>Attack: </h3>
                    <span>{pokemonData.attack}</span>
                    <h3>Defense: </h3>
                    <span>{pokemonData.defense}</span>
                    <h3>Speed: </h3>
                    <span>{pokemonData.speed}</span>
                    <h3>Height: </h3>
                    <span>{pokemonData.height}</span>
                    <h3>Weight: </h3>
                    <span>{pokemonData.weight}</span>
                </div>
                <div>
                    <h3>Tipos: </h3>
                    {pokemonData.types?.map(e=> {
                      return (
                        <p>{e.name}</p>
                      )
                      })}
                </div>
              </div>

            </div>
    </div>
  )
}

export default Detail