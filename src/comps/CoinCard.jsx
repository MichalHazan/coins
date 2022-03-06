import React from 'react'
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
export default function CoinCard({ coin, removeFromFav, addToFav, favsArr }) {
    return (
        <div>

            <Paper sx={{
                m: 1,
                width: 200,
                height: 200,
                padding: 5
            }} elevation={3}>
                  <Avatar alt="coin" src={coin.image} />
                <h1>{coin.id}</h1>
                <h3>${(coin.current_price).toFixed(2)}</h3>
                <Switch 
                defaultChecked={favsArr.find(c=> c.id==coin.id)}
                onChange={e => {
                    if(e.target.checked){
                        addToFav(coin)
                    }else{
                        removeFromFav(coin.id)
                    }
                }} />
            </Paper>

        </div>
    )
}
