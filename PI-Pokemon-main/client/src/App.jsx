import './App.css'
import {Detail, Form, Home, Landing} from './Views'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './Views/About/About'
import Favorites from './components/Favorites/Favorites'



function App() {
  
  const location = useLocation()

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
                  
                />}
        />
//---------------Form-----------------
        <Route 
        path='/create'
        element={<Form
                  
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
