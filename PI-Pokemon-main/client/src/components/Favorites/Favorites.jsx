import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Favorites.module.css'
import {removeFavorite} from '../../redux/actions'
import Card from '../Card/Card'

const Favorites = () => {

    const favorites = useSelector(state=>state.favorites)

  return (
    <div className={style.fav_container}>
        <h1 className={style.title}>Your FAVORITES</h1>
        {favorites && 
            favorites.map(poke => {
                return (
/*                     <div className={style.cardContainer}>
                        <img className={style.image} src={poke.image} alt="" />
                        <h3 className={style.name}>{poke.name}</h3>
                        <button value={poke.id} className={style.favorite} onClick={handleFavorite}>❤️</button>
                        <div className={style.stats}>
                            <p>HP: <span>{poke.hp}</span></p>
                            <p>ATTACK: <span>{poke.attack}</span></p>
                            <p>DEFENSE: <span>{poke.defense}</span></p>
                            <p>SPEED: <span>{poke.speed}</span></p>
                            <p>HEIGHT: <span>{poke.height}</span></p>
                            <p>WEIGHT: <span>{poke.weight}</span></p>
                        </div>
                        <div className={style.types}>
                            {poke.types && poke.types.map(e => {
                            return <h5 className={style[e.name]}>{e.name}</h5>
                            })}
                        </div>
                    </div> */
                        <Card 
                            image={poke.image}
                            id={poke.id}
                            name={poke.name}
                            types={poke.types}
                        />
                )
            })}
    </div>
  )
}

export default Favorites