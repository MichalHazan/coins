import React from 'react'
import CoinCard from './CoinCard'
export default function Coins({favsArr, coinsArr, addToFav, removeFromFav , searchTerm }) {
    return (
        <div className='coins'>
          
            {
                coinsArr.filter(val=>{
                    if (searchTerm === "") {
                        return val
                    } else if(val.id.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val.id.includes(searchTerm)
                    }
                }).map((coin, i) => <CoinCard key={i} coin={coin} addToFav={addToFav} removeFromFav={removeFromFav} favsArr={favsArr}/>)
            }
        </div>
    )
}
