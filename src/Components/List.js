import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

  
function List() {
    const [pokeData, setPokedata] = useState([]);

    useEffect(()=>{
        console.log("component did mount");
        (async () => {
            let ans = await axios.get(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`);
            console.log(ans.data.pokemon);
            setPokedata(ans.data.pokemon);
          })();
        
        return () => {
        // this now gets called when the component unmounts
        };
      },[])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Num</TableCell>
            <TableCell>Type&nbsp;</TableCell>
            <TableCell>Weaknesses&nbsp;</TableCell>
            <TableCell>Image&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokeData.map((row) => (
            <TableRow key={row.num}>
              <TableCell>{row.num}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.weaknesses}</TableCell>
              <TableCell> <img src={row.img} style={{width:'8rem'}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List