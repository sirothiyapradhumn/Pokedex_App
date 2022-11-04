import React from 'react'
import {Link} from 'react-router-dom'

function PokeCard({row, data}) {
  return (
    <div className="card" >
        <img src={row.img} alt={row.name}/>
        <div className="container">
            <h4><b>#{row.num}</b></h4> 
            <p className='pokeName'><b>{row.name}</b></p> 
            <p className='pokeType'>{row.type.map(type=> type+" ")}</p> 
            <button variant="outlined" onClick={()=>data(row)}>
            <Link to="/showdetails" style={{textDecoration:"none"}}>Show Details</Link>
            </button>
        </div>
    </div>
  )
}

export default PokeCard