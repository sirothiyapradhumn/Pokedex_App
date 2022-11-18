import React, { useState } from 'react';
import style from './App.scss';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbaar from './Components/Navbar/Navbaar';
import DetailsShow from './Containers/DetailsShow/DetailsShow';
import { useEffect } from 'react';

function App() {
  const [pokeData, setPokedata] = useState({});
  const [apiData, setApiData] = useState([]);
  function gettingData(row){
    //console.log(row);
    setPokedata(row);
  }
  // console.log("app.js---pokedata",pokeData);

  function getApiData(rows){
    setApiData(rows);
  }


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
            <>
              <Navbaar data ={gettingData} apiCall= {getApiData}/>
            </>
          }/>

      <Route path='/showdetails' element={<DetailsShow pokeData = {pokeData} apiData={apiData} />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
