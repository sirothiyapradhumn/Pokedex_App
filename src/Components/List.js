import React, { useEffect, useState } from 'react'
import PokeCard from './PokeCard';

function List({currText, pokeType, pokeWeakness, data}) {
    const [pokeData, setPokedata] = useState([]);
    // console.log(currText);
    //console.log(pokeType);
    //console.log(pokeWeakness);

    const fetchData = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
        const json = await response.json();
        //console.log(json.pokemon);
        setPokedata(json.pokemon);
      } catch (error) {
        console.log("error", error);
      }
    };

    useEffect(()=>{
        // console.log("component did mount");
        // (async () => {
        //     let ans = await axios.get(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
        //     console.log(ans.data.pokemon);
        //     setPokedata(ans.data.pokemon);
        //   })();
        
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
          if(a.includes(b[i]) == false){
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

      //console.log(filteredPokeByTypes);
      //console.log(filteredPokeByWeakness);

    let filteredPoke =  filteredPokeByWeakness;
    //console.log(filteredPoke);

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
    <div className='all-cards'>
      {filteredPoke.map((row) => (<PokeCard row={row} data={data}/>))}
    </div>
  )
}

export default List