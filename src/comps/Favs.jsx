import React from 'react'
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Favs({ favsArr, removeFromFav }) {
    return (
        <div className='favs'>
            <h1>Your Favorite Coins!</h1>
            {
                favsArr.map((coin,i) => <Paper key={i}  sx={{
                    m: 1,
                    width: 200,
                    height: 200,
                    padding: 5,
                    textAlign: "center"
                }} elevation={3}>
                    <Avatar alt="coin" src={coin.image} />
                    <h3>{coin.id}</h3>
                    <h3>${coin.current_price}</h3>
                    <Button 
                    variant="outlined" 
                    startIcon={<DeleteIcon />}
                    onClick={()=>removeFromFav(coin.id)}
                    >
                        Remove
                    </Button>

                </Paper>)
            }

        </div>
    )
}
