import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.theme.mode === "dark"? props.theme.dark.bgprimary : props.theme.light.bgprimary}; 
}

#root{
  min-height: 100vh;
  display: flex;
  align-items: center;
}

::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-thumb{
  background-image: linear-gradient(to right bottom, #d38312 0%, #a83279 100%);
}
`;

export default GlobalStyles