import CardsContainer from '../../components/Cards/CardsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPokemons } from '../../redux/actions'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './Home.module.css'
import Paginado from '../../components/Paginado/Paginado'
import Loading from './Loading'

const Home = ({setEditPokemon, setNewPokemon, setType, type, orderAttack, orderName, setOrderName, setOrderAttack}) => {

  const pokemons = useSelector(state=> state.allPokemons)


  const [creaded, setCreated] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
  const indexOfLastPokemon = currentPage * pokemonsPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    if(type === 'all' || type === '') {
      dispatch(getPokemons())
      setEditPokemon({})
      setNewPokemon({name: '', image:'', hp: 0, attack: 0, defense: 0, speed: 0, height: 0, weight: 0, types: []})
    } 
  },[])



  return (
    <div className={style.home_container}>
        <SearchBar
          className={style.searchBarContainer}
          setCurrentPage={setCurrentPage}
          setType={setType}
          orderName={orderName}
          orderAttack={orderAttack}
          setOrderName={setOrderName}
          setCreated={setCreated}
          setOrderAttack={setOrderAttack}
        />
        
        {(type && type !== 'all') && <h2 className={style.h2}>{`Pokemons de tipo: ${type}`}</h2>}
        
        {
          pokemons.length ? 
          <CardsContainer
            pokemons={currentPokemons}
            setEditPokemon={setEditPokemon}
            setNewPokemon={setNewPokemon}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          /> : <Loading />
        }
        <Paginado
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pokemonsPerPage={pokemonsPerPage}
          pokemons={pokemons.length}
          paginado={paginado}
        />


    </div>
  )
}

export default Home