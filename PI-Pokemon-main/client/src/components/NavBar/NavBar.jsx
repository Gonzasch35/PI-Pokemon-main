import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={style.navContainer}>
        <Link to='/home'>Home</Link>
        <Link to='/create'>Crear Pokemón</Link>
        <Link onClick={useLocation('/')}>Actualizar</Link>

    </div>
  )
}

export default NavBar