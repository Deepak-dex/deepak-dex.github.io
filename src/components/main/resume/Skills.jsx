import React from 'react'
import styled from 'styled-components'

import Bar from './Bar'


const SkillWrapper = styled.div`
padding: 0em 1em;
`;

const SkillTitle =  styled.h5`
font-size: 1.6rem;
line-height:1;
margin: 1em 0em 1em .5em;
`; 

const SkillContainer =  styled.div`
padding-left: 1em; 
`;

function  Skills({title, contents}) {
    
    return(
        <SkillWrapper>
                    <SkillTitle>{title}</SkillTitle>
                    <SkillContainer>
                        {
                            contents.map(content => <Bar icon={content.icon} name={content.name} /> )
                        }
                    </SkillContainer>
                </SkillWrapper>
    );
}

export default Skills