import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {deletePokemon} from '../../redux/actions'

const Card = ({key, id, image, name, attack, types}) => {

  const dispatch = useDispatch()

  const onClose = (id) => {
    dispatch(deletePokemon(id))
  }

  return (
    <div key={key} className={style.cardContainer}>
        <h3 className={style.name}>{name}</h3>
        <img className={style.image} src={image} alt="img" />

        <div className={style.types}>
          
            {types?.map(e => {
            return <h5 className={style[e.name]}>{e.name}</h5>
          })}

          {isNaN(id) && <button onClick={() => onClose(id)} className={style.on_closed}>X</button>}
        </div>
        <button className={style.button}><Link to={`/detail/${id}`} className={style.link}>Ver Detalles</Link></button>
    </div>
  )
}

export default Card