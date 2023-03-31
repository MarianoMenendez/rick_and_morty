import React, { useEffect, useState } from 'react';
import "./App.css"
import CharactersMenu from './views/charactersMenu/CharactersMenu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './components/containers/nav/NabBar';
import About from './views/about/About';
import Details from './components/containers/details/Details';
import Error404 from './views/errors/Error404';
import Login from './views/login/Login';
import Favorites from './views/favorites/Favorites';

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  const EMAIL= "mariano.menendez96@gmail.com"
  const PASSWORD= "mariano.menendez96@gmail.com"
  
function login(userData) {
  if (userData.password === PASSWORD && userData.user === EMAIL) {
     setAccess(true);
     navigate('/home');
  }
}

function logOut(){
  setAccess(false) 
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

  return( 
  <div>
    <NavBar logOut={logOut}/>
    <Routes>
        <Route path='/' element= {<Login login={login} />}/>
        <Route path='/home' element={<CharactersMenu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/detail/:id' element={<Details/>} />
        <Route path=':error' element={<Error404/>}/>
    </Routes>
   </div>
  )
}

export default App;
