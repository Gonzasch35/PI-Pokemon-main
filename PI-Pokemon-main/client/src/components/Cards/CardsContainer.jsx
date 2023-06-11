import React from 'react'
import Card from '../Card/Card'
import style from './CardsContainer.module.css'

const CardsContainer = ({pokemons, filtro, /* pokemonsFiltrados */ handlerPrev, handlerNext, currentPage}) => {


  return (
    <div className={style.mainContainer}>

        {
          /* filtro !== '' && pokemonsFiltrados.length ? (
            <>
              {pokemonsFiltrados?.map(poke => {
                return <Card
                  key={poke.id}
                  id={poke.id}
                  image={poke.image}
                  name={poke.name}
                  attack={poke.attack}
                  types={poke.types}
                  />
              })}
            </>
        ) : ( */
          <>
            {/* {filtro === '' &&  */}

            {pokemons?.map(poke => {
            return <Card
                key={poke.id}
                id={poke.id}
                image={poke.image}
                name={poke.name}
                attack={poke.attack}
                types={poke.types}
                />
              })}
            </>
            
        }
        <div>
          <button onClick={handlerPrev}>Anterior</button>
          <p>{currentPage}</p>
          <button onClick={handlerNext}>Siguiente</button>
        </div>

    </div>
  )
}

export default CardsContainer

