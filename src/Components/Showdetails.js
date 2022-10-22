import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function Showdetails({pokeData}) {

  return (
    <Box sx={{ flexGrow: 1, padding:10 }}>
      <Grid container spacing={1}>
        <Grid item xs={11}>
            <Card sx={{ maxWidth: 450, ml:40 }}>
            <CardMedia
                component="img"
                image={pokeData.img}
                alt="green iguana"
                src=''
            />
            <CardContent sx={{height:150}}>
                <Typography gutterBottom variant="h5" component="div">{pokeData.name}</Typography>
                <Typography variant="body2" color="text.secondary">{pokeData.num}</Typography>
                <Typography variant="body2" color="text.secondary">{pokeData.type}</Typography>
                <Typography variant="body2" color="text.secondary">{pokeData.weaknesses}</Typography>
                <Typography variant="body2" color="text.secondary">{pokeData.height}</Typography>
                <Typography variant="body2" color="text.secondary">{pokeData.weight}</Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={1}>
            <Button variant="outlined" color="error"> Back </Button>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Showdetails