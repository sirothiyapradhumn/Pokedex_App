import React from 'react'
import {Link} from 'react-router-dom'

function PokeCard({row, data}) {
  return (
    <div class="card">
        <img src={row.img} alt={row.name}/>
        <div class="container">
            <h4><b>{row.num}</b></h4> 
            <p>{row.name}</p> 
            <p>{row.type.map((typ)=>typ+"  ")}</p> 
            <p>{row.weaknesses.map((weak)=>weak+"  ")}</p> 
            <p><button variant="outlined" onClick={()=>data(row)}>
            <Link to="/showdetails" style={{textDecoration:"none"}}>Show Details</Link>
                </button></p> 
        </div>
    </div>
  )
}

export default PokeCard