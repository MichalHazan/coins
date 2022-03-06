import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Coins from './Coins'
import Favs from './Favs'
import Page404 from './Page404'


export default function Main({coinsArr, addToFav,favsArr , removeFromFav, searchTerm}) {
    return (
        <div>

            <h1> 🤪👻</h1>
            <Routes>
                <Route path="/" element={<Coins favsArr={favsArr} coinsArr={coinsArr} addToFav={addToFav} searchTerm={searchTerm} removeFromFav={removeFromFav}/>}/>
                <Route path="/favs" element={<Favs favsArr={favsArr} removeFromFav={removeFromFav}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </div>
    )
}
