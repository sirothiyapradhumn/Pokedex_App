import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import style from './detailsShow.module.scss'

function DetailsShow({pokeData, apiData}) {
    const [nextEvo, setNextEvo] = useState([]);
    const [prevEvo, setPrevEvo] = useState([]);
    const [row, setRow] = useState(pokeData);


    useEffect(()=>{
      row.hasOwnProperty('next_evolution') ? setNextEvo(row.next_evolution) : setNextEvo([]);
      row.hasOwnProperty('prev_evolution') ? setPrevEvo(row.prev_evolution) : setPrevEvo([]);
    },[row])

    const handleClick = (num)=>{
      var filteRow = apiData.filter((obj)=>obj.num === num);
      setRow(filteRow[0]);
      filteRow[0].hasOwnProperty('next_evolution') ? setNextEvo(filteRow[0].next_evolution) : setNextEvo([]);
      filteRow[0].hasOwnProperty('prev_evolution') ? setPrevEvo(filteRow[0].prev_evolution) : setPrevEvo([]);
    }

  return (
    <div className={style.detailShow}>
        <div className={style.detailsCard} >
            <img src={row.img} alt={row.name}/>
            <div className={style.detailsContainer}>
                <h4><b>ID: {row.num}</b></h4>
                <p className={style.pokeName}><b>{row.name}</b></p> 
                <p className={style.pokeType}>Types: {row.type.map((typ)=>typ+"  ")}</p>
                <p className={style.pokeWeak}>Weaknesses: {row.weaknesses.map((weak)=>weak+"  ")}</p>
                <p className={style.pokeHw}>Height: {row.height}</p>
                <p className={style.pokeHw}>Weight: {row.weight}</p>

                <p className={style.pokeNp}>
                Prev Evolution: {row.hasOwnProperty('prev_evolution') ? row.prev_evolution.map(obj=>"> "+obj.name) : "****"}
                </p> 

                <p className={style.pokeNp}>
                  Next Evolution: {row.hasOwnProperty('next_evolution') ? row.next_evolution.map((obj)=>{return "< "+obj.name}) : "****"}
                </p>
            </div>
            <div className={style.btnContainer}>
              {prevEvo.map(obj=>{
                  return <button className={style.btn} variant="outlined" onClick={()=>handleClick(obj.num)}>
                  {obj.name}
                  </button>
                })}
              {nextEvo.map(obj=>{
                return <button  className={style.btn} variant="outlined" onClick={()=>handleClick(obj.num)}>
                {obj.name}
                </button>
              })}
            </div>
        </div>

        <button className={style.btn}  style={{margin: "2rem"}}>
          <Link to="/" style={{textDecoration:"none", margin: "1rem", color: "white"}}>Back</Link>
        </button>
    </div>
    
  )
}

export default DetailsShow