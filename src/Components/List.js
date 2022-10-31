import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
  
function List({currText, pokeType, pokeWeakness, alert}) {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Num</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type&nbsp;</TableCell>
            <TableCell>Weaknesses&nbsp;</TableCell>
            <TableCell>Image&nbsp;</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPoke.map((row) => (
            <TableRow key={row.num}>
              <TableCell>{row.num}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.type.map((typ)=>typ+"  ")}</TableCell>
              <TableCell>{row.weaknesses.map((weak)=>weak+"  ")}</TableCell>
              <TableCell> <img src={row.img} alt={row.name} style={{width:'8rem'}}/></TableCell>
              <TableCell><Button variant="outlined" onClick={()=>alert(row)}>
              <Link to="/showdetails" style={{textDecoration:"none"}}>Show Details</Link> 
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List