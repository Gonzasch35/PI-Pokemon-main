import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({key, id, image, name, attack, types}) => {
  return (
    <div key={key} className={style.cardContainer}>
        <img src={image} alt="img" />
        <h3>Nombre: {name}</h3>
        <h4>Ataque: {attack}</h4>
        <div className={style.types}>
          <div>
            {types?.map(e => {
            return <h5>{e.name}</h5>
          })}
          </div>
        </div>
        <button className={style.button}><Link to={`/detail/${id}`} className={style.link}>Ver Detalles</Link></button>
    </div>
  )
}

export default Card