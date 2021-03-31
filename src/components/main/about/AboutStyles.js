import styled from 'styled-components'

export const AboutSection = styled.div`
/* overflow: hidden */
`;

export const Intro = styled.h6`
font-size: 1rem;
font-weight: 600;
line-height: 1.6;
color: ${(props) => props.theme.mode === "dark"? props.theme.dark.textprimary : props.theme.light.textprimary };  
`;

export const OfferingWrapper = styled.div`
background-color: ${(props) => props.theme.mode === "dark"? props.theme.dark.bgtertiary : props.theme.light.bgtertiary}; 
margin: 0em -2em;
padding: 1em 1em 2em 1em;
`;

export const Title = styled.h6`
font-size:1.6rem;
font-weight:700;
margin: .7em 0em;
color: ${(props) => props.theme.mode === "dark" ? props.theme.dark.textprimary : props.theme.light.textprimary};
`;

export const Offering = styled.div`
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-gap:  1em 3em;
    padding:  .3em 1em;
    @media (max-width:958px){
        grid-template-columns:auto;
    }
`;
