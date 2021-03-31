import React, {useState} from 'react'
import { motion } from "framer-motion";

import {ProjectWrapper,ProjectNavbar,ProjectLink,ProjectContainer} from './ProjectsStyles'

import dataProjects from '../../data/projectData'

import ProjectCard from './ProjectCard'

const projectVariant = {
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

function Projects(){
    
    const [projects, setprojects] = useState(dataProjects)

    const handleFilterCategory = (name) => {
        const newProjectArr = dataProjects.filter(project => project.category.includes(name))
        setprojects(newProjectArr)
    }
    
    return(
        <ProjectWrapper as={motion.div} variants={projectVariant} initial='hidden' animate='visible' >
            <ProjectNavbar>
                <ProjectLink onClick={() => setprojects(dataProjects)} >All</ProjectLink>
                <ProjectLink onClick={() => handleFilterCategory('react.js')}>React</ProjectLink>
                <ProjectLink onClick={() => handleFilterCategory('mongoDB')}>MongoDB</ProjectLink>
                <ProjectLink onClick={() => handleFilterCategory('node.js')}>Node</ProjectLink>
                <ProjectLink onClick={() => handleFilterCategory('vanilla')}>Vanilla</ProjectLink>
            </ProjectNavbar>
            <ProjectContainer>
                {
                    projects.map(project => <ProjectCard key={project.name} project={project} /> )
                }
            </ProjectContainer>
        </ProjectWrapper>
    );
}

export default Projects