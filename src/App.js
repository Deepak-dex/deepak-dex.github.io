import React, { useState, useEffect } from 'react'
import { ThemeProvider} from 'styled-components'
import storage from 'local-storage-fallback'

import sun from './assets/icons/icons8-sun.gif'

import GlobalStyles from './globalStyles'
import {MainContainer, ThemeButton} from './AppStyles'


import Sidebar from './components/sideBar/Sidebar'
import Maincontent from './components/main/Maincontent'


const getInitialTheme = () =>{
  const savedTheme =storage.getItem('theme')
  return savedTheme? JSON.parse(savedTheme) : "light"
}

function App() {

  const [themeMode, setThemeMode] = useState(getInitialTheme)
  
  const theme = {
    mode: themeMode,
    light:{
      bgprimary:"white",
      bgsecondary:"rgba(255,255,255,0.6)",
      bgtertiary:"rgba(230,230,250,0.6)",
      textprimary:"#354548",
      textsecondary:"#black",

    },
    dark:{
      bgprimary:"#15202b",
      bgsecondary: "rgba(25, 39, 52, 0.8)",
      bgtertiary:"rgba(23, 162, 184, 0.5)",
      textprimary:"rgba(230,230,250)",
      textsecondary:"white",
    },
  }

  useEffect(
    () => {
      storage.setItem('theme',JSON.stringify(themeMode))
    },[themeMode])

  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <ThemeButton onClick = {e => setThemeMode(themeMode == "dark" ? "light" : "dark" )} ><img src={sun} /></ThemeButton>
      <MainContainer>
        <Sidebar/>
        <Maincontent/>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App
