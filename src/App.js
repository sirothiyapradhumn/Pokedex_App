import React, { useState } from 'react';
import './App.css';
// import List from './Components/List';
import Navbar from './Components/Navbar';
import Showdetails from './Components/Showdetails';

function App() {
  const [pokeData, setPokedata] = useState({});
  function parentAlert(row){
    //console.log(row);
    setPokedata(row);
  }
  console.log(pokeData);
  return (
    <>
      <Navbar alert ={parentAlert}/>
      <Showdetails pokeData = {pokeData}/>
    </>
  );
}

export default App;
