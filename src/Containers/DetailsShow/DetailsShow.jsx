import React from 'react'
import {Link} from 'react-router-dom'
import style from './detailsShow.module.scss'

function DetailsShow({pokeData}) {
    //console.log(pokeData);
  return (
    <div className={style.detailShow}>
        <div className={style.detailsCard} >
            <img src={pokeData.img} alt={pokeData.name}/>
            <div className={style.detailsContainer}>
                <h4><b>ID: {pokeData.num}</b></h4>
                <p className={style.pokeName}><b>{pokeData.name}</b></p> 
                <p className={style.pokeType}>Types: {pokeData.type.map((typ)=>typ+"  ")}</p>
                <p className={style.pokeWeak}>Weaknesses: {pokeData.weaknesses.map((weak)=>weak+"  ")}</p>
                <p className={style.pokeHw}>Height: {pokeData.height}</p>
                <p className={style.pokeHw}>Weight: {pokeData.weight}</p>
                <p className={style.pokeNp}>
                  Next/Prev Evolution: {pokeData.hasOwnProperty('next_evolution') ? pokeData.next_evolution[0].name  : pokeData.prev_evolution[0].name}
                  </p>
            </div>
        </div>

        <button><Link to="/" style={{textDecoration:"none"}}>Back</Link></button>
    </div>
    
  )
}

export default DetailsShow