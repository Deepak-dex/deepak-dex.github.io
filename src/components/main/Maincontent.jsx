import React from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Navbar from '../Navbar'
import About from './about/About'
import Resume from './resume/Resume'
import Projects from './projects/Projects'


const MainContent = styled.div`
background-color: ${(props) => props.theme.mode === "dark"? props.theme.dark.bgsecondary : props.theme.light.bgsecondary};
border-radius: 20px;
padding: 2em 2em;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
@media (max-width: 420px){
    padding: 2em 1em;
    overflow-x: hidden;
}
`;

function Maincontent(){

    return(
        <MainContent>
            <Router>
            <Navbar/>
            <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/resume" exact component={Resume}/>
            <Route path="/projects" exact component={Projects}/>
            <Redirect to="/"/>
            </Switch>
            </Router>
        </MainContent>
    );
}

export default Maincontent