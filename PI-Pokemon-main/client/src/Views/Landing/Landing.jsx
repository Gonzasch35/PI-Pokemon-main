import React from 'react'
import { Link } from 'react-router-dom'
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div>
      <h1>Bienvenidos a <span className={style.span}>Pueblo Paleta</span></h1>
        <Link to='/home'>Inicia la Aventura</Link>
    </div>
  )
}

export default Landing