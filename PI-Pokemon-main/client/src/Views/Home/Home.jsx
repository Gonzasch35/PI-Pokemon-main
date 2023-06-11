import CardsContainer from '../../components/Cards/CardsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPokemons } from '../../redux/actions'
import SearchBar from '../../components/SearchBar/SearchBar'
/* import style from './Home.module.css' */

const Home = () => {

  const pokemons = useSelector(state=> state.allPokemons)
  console.log(pokemons);
/*   const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]) */
  const [order, setOrder] = useState('')
  const [pokesForPage, setPokesForPage] = useState([...pokemons].splice(0, 12))
  const [currentPage, setCurrentPage] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  },[dispatch])

  //---------------------------------Filtrado------------------------------
  
/*   useEffect(() => {
    if(filtro){
      const pokemonsFiltrados = pokemons.filter((pokemon) => {
        return pokemon.types.some((type) => type.name === filtro);
      })
     setPokemonsFiltrados(pokemonsFiltrados)
    } else setPokemonsFiltrados([])
    
  }, [filtro]) */

  //--------------------------------Ordenamiento---------------------------
  
/*   useEffect(() => {

        if(order === 'name_asc'){

              if(pokemonsFiltrados.length) {
                  pokemonsFiltrados.sort((a, b) => {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                  })
              } else {
                    pokemons.sort((a, b) => {
                      if(a.name > b.name) return 1;
                      if(a.name < b.name) return -1;
                      return 0;
                    })
              }

        } else if(order === 'name_desc') {

              if(pokemonsFiltrados.length) {
                    pokemonsFiltrados.sort((a, b) => {
                      if(a.name > b.name) return -1;
                      if(a.name < b.name) return 1;
                      return 0;
                    })
              } else {
                    pokemons.sort((a, b) => {
                      if(a.name > b.name) return -1;
                      if(a.name < b.name) return 1;
                      return 0;
                    })
              }

        } else if(order === 'attack_asc') {

              if(pokemonsFiltrados.length) {
                    pokemonsFiltrados.sort((a, b) => {
                      if(a.attack > b.attack) return -1;
                      if(a.attack < b.attack) return 1;
                      return 0;
                    })
              } else {
                    pokemons.sort((a, b) => {
                      if(a.attack > b.attack) return -1;
                      if(a.attack < b.attack) return 1;
                      return 0;
                    })
              }
          
        } else {

              if(pokemonsFiltrados.length) {
                    pokemonsFiltrados.sort((a, b) => {
                      if(a.attack > b.attack) return 1;
                      if(a.attack < b.attack) return -1;
                      return 0;
                    })
              } else {
                    pokemons.sort((a, b) => {
                      if(a.attack > b.attack) return 1;
                      if(a.attack < b.attack) return -1;
                      return 0;
                    })
              }
      
        }
  }, [order]) */

  //--------------------------------Paginado-------------------------------

  const handlerPrev = () => {
    const prevPage = currentPage - 1


    if (prevPage < 0) return;

    const firstIndex = prevPage * 12

    setPokesForPage([...pokemons].splice(firstIndex, 12))

    setCurrentPage(prevPage)
    console.log('prev');
  }


  const handlerNext = () => {
    const totalPokemons = pokemons.length
    console.log(totalPokemons);
    
    const nextPage = currentPage + 1

    const firstIndex = nextPage * 12

    if(firstIndex > totalPokemons) return;

    setPokesForPage([...pokemons].splice(firstIndex, 12))
    setCurrentPage(nextPage)
  }

  return (
    <div>
        <SearchBar 
/*           filtro={filtro}
          setFiltro={setFiltro} */
          order={order}
          setOrder={setOrder}
        />
        
        <h2>{pokemons.length ? `Pokemons de tipo:}` : 'Lista de pokemóns'}</h2>
        
        <CardsContainer
          pokemons={pokemons}
/*           pokemonsFiltrados={pokemonsFiltrados} */
          handlerNext={handlerNext}
          handlerPrev={handlerPrev}
          currentPage={currentPage}
        />


    </div>
  )
}

export default Home