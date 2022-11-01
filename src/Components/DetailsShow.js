import React from 'react'
import {Link} from 'react-router-dom'

function DetailsShow({pokeData}) {
    //console.log(pokeData);
  return (
    <div className='detailShow'>
        <div className="details-card" >
            <img src={pokeData.img} alt={pokeData.name}/>
            <div className="details-container">
                <h4><b>ID: {pokeData.num}</b></h4>
                <p className='poke-name'><b>{pokeData.name}</b></p> 
                <p className='poke-type'>Types: {pokeData.type.map((typ)=>typ+"  ")}</p>
                <p className='poke-weak'>Weaknesses: {pokeData.weaknesses.map((weak)=>weak+"  ")}</p>
                <p className='poke-hw'>Height: {pokeData.height}</p>
                <p className='poke-hw'>Weight: {pokeData.weight}</p>
                <p className='poke-np'>
                  Next/Prev Evolution: {pokeData.hasOwnProperty('next_evolution') ? pokeData.next_evolution[0].name  : pokeData.prev_evolution[0].name}
                  </p>
            </div>
        </div>

        <button><Link to="/" style={{textDecoration:"none"}}>Back</Link></button>
    </div>
    
  )
}

export default DetailsShow