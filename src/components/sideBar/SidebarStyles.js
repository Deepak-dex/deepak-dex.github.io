import styled from 'styled-components'  

export const SideBar = styled.div`
background-color: ${(props) => props.theme.mode === "dark"? props.theme.dark.bgsecondary : props.theme.light.bgsecondary};
border-radius: 20px;
min-width: 15em;
padding: 2em 2em;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
overflow:hidden;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
@media (max-width:1236px){
    padding: 4em 2em;
}
`;

export const Avtar = styled.div`
width: 8.4em;
height: 8.4em;
position: relative;
overflow: hidden;
border-radius: 50%;
`;

export const AvtarImg = styled.img`
display: inline;
margin: 0 auto;
margin-left: -25%;
height: 100%;
width: auto;`;

export const Name = styled.span`
font-family: kaushan Script;
font-size:1.7rem;
background: linear-gradient(to right, #d38312 0%, #a83279 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-top:0.4em;
`;

export const Title = styled.div`
font-size:0.7rem;
font-weight:600;
color: ${(props) => props.theme.mode === "dark"? props.theme.dark.textsecondary : props.theme.light.textsecondary}; 
`;

export const ResumeBtn = styled.a`
text-decoration: none;
color: ${(props) => props.theme.mode === "dark"? props.theme.dark.textprimary : '#464242' }; 
display: flex;
background-color: ${(props) => props.theme.mode === "dark"? props.theme.dark.bgtertiary : props.theme.light.bgtertiary}; 
border-radius:20px;
padding:.6em 1.3em .6em 1em;
align-items:center;
justify-content:center;
margin-top: 2em;
`;

export const SocialLinks = styled.div`
min-width: 8em;
margin-top: 1em;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Info = styled.div`
margin: 1em -5em;
width: 150%;
height: 8em;
background-color: ${(props) => props.theme.mode === "dark"? props.theme.dark.bgtertiary : props.theme.light.bgtertiary}; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;

export const EmailBtn = styled.a`
cursor: pointer;
color:white;
text-decoration: none;  
padding:.6em 2em;
border-radius: 1em;
background: linear-gradient(to right, #d38312 0%, #a83279 100%);
`;

export const Icons = styled.img`
    width: 2em;
    height: 2em;
`;