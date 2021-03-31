import React from 'react'
import { motion } from "framer-motion";

import {AboutSection,Intro,OfferingWrapper,Title,Offering} from './AboutStyles'

import Offeringskills from "./Offeringskills";

import skills from '../../data/aboutData'



const aboutVariant = {
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

function About(){
    
    return(
        <AboutSection as={motion.div} variants={aboutVariant} initial='hidden' animate='visible' >
            <Intro>Hi, I am Deepak Tiwari, a Software developer, Student, Tech enthusiast  </Intro>
            <OfferingWrapper>
                <Title>What I offer</Title>
                <Offering>
                {
                    skills.map(skill => <Offeringskills icon={skill.icon} title={skill.title} about={skill.about} /> )
                }
                </Offering>
            </OfferingWrapper>
        </AboutSection>

    );
}

export default About