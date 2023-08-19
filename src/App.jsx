import React, { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbaar from './Components/Navbar/Navbaar';
import DetailsShow from './Containers/DetailsShow/DetailsShow';

function App() {
  const [pokeData, setPokedata] = useState({});
  const [apiData, setApiData] = useState([]);
  function gettingData(row){
    setPokedata(row);
  }

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
