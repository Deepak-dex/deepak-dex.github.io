import styled from 'styled-components'

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1em;
  width: min(80em,90%);
  height: max(40em,80vh);
  margin: auto;
  padding: 0px 0px;
  @media (max-width: 1236px){
    justify-content: center;
    height: 100%;
    grid-template-columns: 1fr;
  }
`;

export const ThemeButton = styled.span`
position: absolute;
top: 2em;
right: 4em;
border-radius: 50%;
height: 3.5em;
width: 3.5em;
background-color: ${(props) => props.theme.mode === 'dark'? props.theme.dark.bgtertiary : props.theme.light.bgtertiary};
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
cursor: pointer;
z-index:100;

  img{
    height:100%;
    border-radius: 50%;
    ${(props) => props.theme.mode === 'dark'? 'filter: invert();':''}
  }
`;  
