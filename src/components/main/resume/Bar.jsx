import React from "react"
import styled from 'styled-components'

const Icon = styled.img`
height: 20px;
width: 20px;
margin-left: 1em;
margin-right: .5em;
padding-top: .2rem;
`;

const Bars = styled.div`
margin-bottom: 1em;
background: linear-gradient(to right, #d38312 0%, #a83279 100%);
width: 70%;
display: flex;
padding: .6em;
border-radius: 26px;
color: white;
`;

function Bar({icon, name}) {
    return(
        <Bars>
        <span><Icon src={icon} alt=""/></span>
        <span>{name}</span>
        </Bars>
    );
}

export default Bar