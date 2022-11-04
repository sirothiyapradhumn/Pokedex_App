import React, { useState } from 'react';
import style from './App.scss';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbaar from './Components/Navbar/Navbaar';
import DetailsShow from './Containers/DetailsShow/DetailsShow';

function App() {
  const [pokeData, setPokedata] = useState({});
  function gettingData(row){
    //console.log(row);
    setPokedata(row);
  }
  //console.log(pokeData);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
            <>
              <Navbaar data ={gettingData}/>
            </>
          }/>

      <Route path='/showdetails' element={<DetailsShow pokeData = {pokeData}/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
