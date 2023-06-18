import CardsContainer from '../../components/Cards/CardsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPokemons } from '../../redux/actions'
import SearchBar from '../../components/SearchBar/SearchBar'
import style from './Home.module.css'
import Paginado from '../../components/Paginado/Paginado'
import Loading from './Loading'

const Home = ({setEditPokemon, setNewPokemon}) => {

  const pokemons = useSelector(state=> state.allPokemons)
  const [orderName, setOrderName] = useState('')
  const [orderAttack, setOrderAttack] = useState('')
  const [type, setType] = useState('')
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
    dispatch(getPokemons())
  },[])



  return (
    <div className={style.home_container}>
        <SearchBar
          className={style.searchBarContainer}
          setCurrentPage={setCurrentPage}
          setType={setType}
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