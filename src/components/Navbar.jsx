import React ,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const NavBar = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`;

const ActivePage = styled.div`
font-size: 2rem;
font-weight: 700;
color: ${(props) => props.theme.mode === "dark" ? '#17a2b8' : '#354358'};
border-bottom: 4px solid ;
border-image: linear-gradient(to right, #d38312 0%, #a83279 100%);
border-image-slice: 9;
`;

const NavBtn = styled.span`
&{
cursor: pointer;
font-size: 1.3rem;
margin-right:20px;
color: ${(props) => props.theme.mode === "dark" ? '#17a2b8' : '#354358'};
}
&:hover{
background: linear-gradient(to right, #d38312 0%, #a83279 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
`;

const Slink = styled(Link)`
text-decoration:none;
font-size: 1.3rem;
color: #354358;
`;

function Navbar(){

    const [activepage, setActivepage] = useState('About')

    useEffect(() => {
        let currentURL = window.location.href

        if (currentURL.endsWith('/'))
            setActivepage('About');
        else if (currentURL.endsWith('/Resume'))
            setActivepage('Resume');
        else if (currentURL.endsWith('/Projects'))
            setActivepage('Projects');

    }, [activepage])

    const navbarVariant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible:{
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }

    return(
         <NavBar as={motion.div} variants={navbarVariant} initial='hidden' animate='visible' >
             <ActivePage>{activepage}</ActivePage>
             <div>
                { activepage !== 'About' && 
                <Slink to="/"> <NavBtn onClick={() => setActivepage('About')} >About</NavBtn> </Slink> }
                { activepage !== 'Resume' && 
                <Slink to="/Resume"> <NavBtn onClick={() => setActivepage('Resume')} >Resume</NavBtn> </Slink> }
                { activepage !== 'Projects' && 
                <Slink to="/Projects"> <NavBtn onClick={() => setActivepage('Projects')} >Projects</NavBtn> </Slink> }
             </div>
         </NavBar> 
    );
}

export default Navbar