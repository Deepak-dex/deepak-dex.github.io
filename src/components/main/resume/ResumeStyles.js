import styled from 'styled-components'

export const ResumeSection = styled.div`
 color: ${(props) => props.theme.mode === "dark"? props.theme.dark.textprimary : props.theme.light.textprimary }; 
 line-height: 1.6;
 min-height: 70vh;
`;

export const InfoSection = styled.div`
display: flex;
justify-content: space-around;
@media(max-width:846px){
    flex-direction:column;
}
`;

export const InfoWrapper = styled.div`
 padding: 0em 1em;
`;

export const InfoHeading = styled.h4`
 font-size: 1.6rem;
 line-height:1;
 margin: 1em 0em .4em .5em;
`;

export const InfoContainer = styled.div`

`;

export const Title = styled.h5`
margin: 0em;
font-size: 1.3rem;
`;

export const Name = styled.p`
font-style: italic;
margin: 0em 0em 1em 0em;
`;

export const Somedetails = styled.p`

`;

export const SkillSection = styled.div`
display: grid;
grid-template-columns:1fr 1fr;
grid-gap: 3em;
@media (max-width:650px){
    grid-template-columns:auto;
}
`;