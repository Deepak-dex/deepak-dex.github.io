import React from 'react'
import { motion } from "framer-motion";

import {ResumeSection,InfoSection,InfoWrapper,InfoHeading,InfoContainer,Title,Name,Somedetails,SkillSection} from './ResumeStyles'

import Skills from "./Skills";

import {language, framework} from "../../data/resumeData";



const resumeVariant = {
    hidden: {
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            delay: 0.1, duration: 0.4
        }
    }
}

function Resume(){
    
    return(
        <ResumeSection as={motion.div} variants={resumeVariant} initial='hidden' animate='visible' >
            <InfoSection>
                <InfoWrapper>
                    <InfoHeading>Education</InfoHeading>
                    <InfoContainer>
                        <Title>B.sc Computer Science</Title>
                        <Name>Model College</Name>
                        <Somedetails>I'm currently pursuing Computer science degree from model college</Somedetails>
                    </InfoContainer>
                </InfoWrapper>
                <InfoWrapper>
                    <InfoHeading>Experience</InfoHeading>
                    <InfoContainer>
                        <Title>Open Source Contributer</Title>
                        <Name>GSsoc</Name>
                        <Somedetails>It was a 3 month long open source program by girlscript foundation </Somedetails>
                    </InfoContainer>
                </InfoWrapper>
            </InfoSection>

            <SkillSection>
                <Skills title="Languages" contents={language} />
                <Skills title="Framework" contents={framework}/>
            </SkillSection>
            
        </ResumeSection>
    );
}

export default Resume