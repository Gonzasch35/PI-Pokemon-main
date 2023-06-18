import './App.css'
import {Detail, Form, Home, Landing} from './Views'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './Views/About/About'
import Favorites from './components/Favorites/Favorites'
import { useState } from 'react'



function App() {
  
  const location = useLocation()
  const [message, setMessage] = useState('')
  const [editPokemon, setEditPokemon] = useState({})
  const [newPokemon, setNewPokemon] = useState({
        name: '',
        image: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
      })

  return (
    <div>
       {location.pathname !== '/' && <NavBar />}
      <Routes>
        
//---------------Landing-----------------
        <Route 
        exact path='/'
        element={<Landing

                />}
        />
//---------------Home-----------------
        <Route 
        path='/home'
        element={<Home
                setEditPokemon={setEditPokemon}
                setNewPokemon={setNewPokemon}
                />}
        />
//---------------Form-----------------
        <Route 
        path='/create'
        element={<Form
                message={message}
                setMessage={setMessage}
                newPokemon={newPokemon}
                setNewPokemon={setNewPokemon}
                editPokemon={editPokemon}
                />}
        />

//---------------Detail-----------------
        <Route 
        path='/detail/:id'
        element={<Detail
                  
                />}
        />

//--------------About-------------------
        <Route 
        path='/about'
        element={<About
                  
                />}
        />

//--------------Favorites-------------------
        <Route 
        path='/favorites'
        element={<Favorites

                />}
        />

      </Routes>
    </div>
  )
}

export default App
