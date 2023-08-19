/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PokeCard from '../PokeCard/PokeCard';
import style from './list.module.scss'

function List({currText, pokeType, pokeWeakness, data, apiCall}) {
    const [pokeData, setPokedata] = useState([]);

    const fetchData = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
        const json = await response.json();
        apiCall(json.pokemon);
        setPokedata(json.pokemon);
      } catch (error) {
        console.log("error", error);
      }
    };

    useEffect(()=>{
        fetchData();
        return () => {
        // this now gets called when the component unmounts
        };
      },[])

      
			
      function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length < b.length) return false;
        for (var i = 0; i < b.length; ++i) {
          if(a.includes(b[i]) === false){
            return false;
          }
        }
        return true;
      }
      
      var filteredPokeByTypes = pokeData.filter( (obj)=>{
        return (arraysEqual(obj.type.sort(), pokeType.sort()));
      });

      var filteredPokeByWeakness = filteredPokeByTypes.filter((obj)=>{
        return (arraysEqual(obj.weaknesses.sort(), pokeWeakness.sort()));
      });


    let filteredPoke =  filteredPokeByWeakness;

    if(currText === ""){
      filteredPoke = filteredPokeByWeakness;
    }
    else{
      filteredPoke = filteredPoke.filter((poke) =>{
            let pokeName = poke.name.toLowerCase();
            return pokeName.includes(currText); 
        });
    }  

  return (
    <div className={style.allCards}>
      {filteredPoke.map((row) => (<PokeCard row={row} data={data}/>))}
    </div>
  )
}

export default List