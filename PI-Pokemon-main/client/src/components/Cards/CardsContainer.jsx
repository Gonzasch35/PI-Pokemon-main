import React from 'react'
import Card from '../Card/Card'
import style from './CardsContainer.module.css'

const CardsContainer = ({pokemons, setEditPokemon, setNewPokemon}) => {


  return (
    <div>

      <div className={style.mainContainer}>

          <>
            {pokemons && pokemons.map(poke => {
            return <Card
                    poke={poke}
/*                 key={poke.id}
                id={poke.id}
                image={poke.image}
                name={poke.name}
                attack={poke.attack}
                types={poke.types} */
                setEditPokemon={setEditPokemon}
                setNewPokemon={setNewPokemon}
                />
              })}
            </>


      </div>

{/*       <div className={style.buttonsPage}>
          <button onClick={handlerPrev}>Anterior</button>
          <p>{currentPage + 1} - {totalPages}</p>
          <button onClick={handlerNext}>Siguiente</button>
      </div> */}
    </div>
  )
}

export default CardsContainer

