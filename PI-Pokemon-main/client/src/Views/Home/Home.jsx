import CardsContainer from '../../components/Cards/CardsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPokemons } from '../../redux/actions'
import SearchBar from '../../components/SearchBar/SearchBar'
/* import style from './Home.module.css' */

const Home = () => {

  const pokemons = useSelector(state=> state.allPokemons)

  const [filtro, setFiltro] = useState('')
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])
  const [order, setOrder] = useState('')

  const [listado, setListado] = useState({})

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  },[])
  
  //---------------------------------Filtrado------------------------------
  useEffect(() => {
    if(filtro){
      const pokemonsFiltrados = pokemons.filter((pokemon) => {
        return pokemon.types.some((type) => type.name === filtro);
      })
     setPokemonsFiltrados(pokemonsFiltrados)
    } else setPokemonsFiltrados([])
    
  }, [filtro])

  //--------------------------------Ordenamiento---------------------------
  
  useEffect(() => {

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
  }, [order])

  //--------------------------------Paginado-------------------------------

  const handlerPrev = () => {
    console.log('prev');
  }


  const handlerNext = () => {
    console.log('next');
  }

  return (
    <div>
        <SearchBar 
          filtro={filtro}
          setFiltro={setFiltro}
          order={order}
          setOrder={setOrder}
        />
        
        <h2>{pokemonsFiltrados.length ? `Pokemons de tipo: ${filtro}` : 'Lista de pokemóns'}</h2>
        
        <CardsContainer
          pokemons={pokemons} 
          filtro={filtro}
          pokemonsFiltrados={pokemonsFiltrados}
        />

        <button onClick={handlerPrev}>Anterior</button>
        <button onClick={handlerNext}>Siguiente</button>
    </div>
  )
}

export default Home