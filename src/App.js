import { Badge, Drawer } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Header from './comps/Header'
import Main from './comps/Main'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EuroIcon from '@mui/icons-material/Euro';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import InfoIcon from '@mui/icons-material/Info';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

export default function App() {
  // -------routing---------
  const navigate = useNavigate()
  const [isNavOpen, setisNavOpen] = useState(false)
  const travelTo = (dest) => {
    navigate('/' + dest)
    setisNavOpen(false)
  }
  // --------states-------
  const [coinsArr, setcoinsArr] = useState([])
  const [favsArr, setfavsArr] = useState([])
  const [searchTerm, setsearchTerm] = useState('')
  // --------functions-----------------
  // -----getCoinsFromApi-----------------
  useEffect(() => {
    (async () => {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1&per_page=50')
      const data = await res.json()
      setcoinsArr(data)

    })()
  }, [])
  // ---הוספה למועדפים----
  const addToFav = (coin) => {
    setfavsArr([...favsArr, coin])
    console.log(favsArr);
  }
  // ----הורדה ממועדפים----
  const removeFromFav = (id) => {
    setfavsArr(favsArr.filter((c) => c.id !== id))
  }


  return (
    <div>
      <Header setisNavOpen={setisNavOpen} setsearchTerm={setsearchTerm} />
      <Drawer
        anchor="left"
        open={isNavOpen}
        onClose={() => setisNavOpen(false)}
      // onClose={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("")}>
              <ListItemIcon>
                <EuroIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Coins" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("favs")}>
              <ListItemIcon>
                {/* בדג' מציג לי את המספר של המועדפים */}
                <Badge badgeContent={favsArr.length} color="primary" >
                  <StarBorderPurple500Icon color="secondary" />
                </Badge>

              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => travelTo("about")}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main coinsArr={coinsArr} favsArr={favsArr} addToFav={addToFav} removeFromFav={removeFromFav} searchTerm={searchTerm} />
    </div>
  )
}
