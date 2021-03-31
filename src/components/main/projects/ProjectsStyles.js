import styled from 'styled-components'

export const ProjectWrapper = styled.div`
margin-top: 2em;
height: 66vh;
overflow-y: auto;
`;

export const ProjectNavbar = styled.div`
color: ${(props) => props.theme.mode === "dark"? 'rgba(230,230,250, .8)' : '#464242' }; 
`;

export const ProjectLink = styled.span`
 margin-right: 1em;
 cursor: pointer;
`;

export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,16em);
    justify-content:space-around;
`;
