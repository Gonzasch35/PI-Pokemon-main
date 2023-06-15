import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from './logo.png'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <div>
        <img className={style.logo} src={logo} alt="logo" />
      </div>
      <div className={style.links_container}>
        <Link to='/home'>Home</Link>
        <Link to='/create'>Crear Pokemón</Link>
        <Link to='/home'>Favoritos</Link>
        <Link to='/home'>About</Link>
        <Link onClick={useLocation('/')}>Actualizar</Link>
      </div>

    </div>
  )
}

export default NavBar