import React from 'react'
import {Link} from 'react-router-dom'

function DetailsShow({pokeData}) {
    //console.log(pokeData);
  return (
    <div className='detailShow'>
        <div className="detailsCard" >
            <img src={pokeData.img} alt={pokeData.name}/>
            <div className="detailsContainer">
                <h4><b>ID: {pokeData.num}</b></h4>
                <p className='pokeName'><b>{pokeData.name}</b></p> 
                <p className='pokeType'>Types: {pokeData.type.map((typ)=>typ+"  ")}</p>
                <p className='pokeWeak'>Weaknesses: {pokeData.weaknesses.map((weak)=>weak+"  ")}</p>
                <p className='pokeHw'>Height: {pokeData.height}</p>
                <p className='pokeHw'>Weight: {pokeData.weight}</p>
                <p className='pokeNp'>
                  Next/Prev Evolution: {pokeData.hasOwnProperty('next_evolution') ? pokeData.next_evolution[0].name  : pokeData.prev_evolution[0].name}
                  </p>
            </div>
        </div>

        <button><Link to="/" style={{textDecoration:"none"}}>Back</Link></button>
    </div>
    
  )
}

export default DetailsShow