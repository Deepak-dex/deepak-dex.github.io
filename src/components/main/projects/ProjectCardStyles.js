import styled from 'styled-components'

export const ProjectContainer = styled.div`
margin: 1em 0em ;
width: 100%;
height: 100%;
`; 

export const Project = styled.div`

`;

export const Image = styled.img`
&{
height: 10em;
width: 15em;
border: 1px solid #d38312;
border-radius: 30px;
transition: transform 0.3s linear;
}
&:hover{
    transform: scale(1.05);
}
`;

export const ProjectTitle = styled.div`

`;

export const ProjectLink = styled.a`
text-decoration: none;
color: ${(props) => props.theme.mode === "dark"? props.theme.dark.textprimary : props.theme.light.textprimary }; 
display: flex;
justify-content: center;
align-items: center;
margin-top: .5em;
`;

export const Icon = styled.img`
height: 1.5em;
width: 1.5em;
margin-right: 3px;
`;