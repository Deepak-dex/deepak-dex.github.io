import React from 'react'
import { motion } from "framer-motion";

import {SideBar,Avtar,AvtarImg,Name,Title,ResumeBtn,SocialLinks,Info,EmailBtn,Icons} from './SidebarStyles'

import dex1 from '../../assets/dex1.jpg'
import tie from '../../assets/icons/tie.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import email from '../../assets/icons/email.svg'
import pin from '../../assets/icons/pin.svg'

const sideVariant = {
    hidden: {
        x: '-10vh',
        opacity: 0
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.2, duration: 0.7, type: 'spring'
        }
    }
}

function Sidebar(){

    return(
        <SideBar as={motion.div} variants={sideVariant} initial='hidden' animate='visible' >
            <Avtar><AvtarImg src={dex1} alt="avtar"/></Avtar>
            <Name>Deepak Tiwari</Name>
            <Title>Student • Software Developer • Explorer</Title>

            <ResumeBtn href="#"><Icons src={tie} alt="tie"/>Download Resume</ResumeBtn>
            <SocialLinks>
                <a href="https://github.com/Deepak-dex" target="_blank" rel="noreferrer"><Icons src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/deepak-tiwari-6b13971b1" target="_blank" rel="noreferrer"><Icons src={linkedin} alt="linkedin"/></a>
                <a href="mailto: f12894343@gmail.com" target="_blank" rel="noreferrer"><Icons src={email} alt="email"/></a>
            </SocialLinks>

            <Info>
                <div><Icons src={pin} alt="location"/> Mumbai, India</div>
                <div>f12894343@gmail.com</div>
                <div>8369118960</div>
            </Info>
        <EmailBtn href="mailto: f12894343@gmail.com" target="_blank" rel="noreferrer">email me</EmailBtn>
        </SideBar>
    );
}

export default Sidebar;