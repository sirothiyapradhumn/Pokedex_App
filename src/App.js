import React, { useState } from 'react';
import './App.scss';
// import List from './Components/List';
import Navbar from './Components/Navbar';
import Showdetails from './Components/Showdetails';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbaar from './Components/Navbaar';

function App() {
  const [pokeData, setPokedata] = useState({});
  function parentAlert(row){
    //console.log(row);
    setPokedata(row);
  }
  //console.log(pokeData);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
            <>
              <Navbaar alert ={parentAlert}/>
              {/* <Navbar alert ={parentAlert}/> */}
              
            </>
          }/>

      <Route path='/showdetails' element={<Showdetails pokeData = {pokeData}/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
