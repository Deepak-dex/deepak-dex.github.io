import React from 'react'

import {ProjectContainer,Project,Image,ProjectTitle,ProjectLink,Icon} from './ProjectCardStyles'

import github from "../../../assets/icons/github.svg";


function ProjectCard({project: {name, image, deployed_url, github_url}}) {

    return(
        <ProjectContainer>
            <Project>
                <a href={deployed_url} target="_blank" rel="noopener noreferrer">
                    <Image src={image} alt="" />
                </a>
                <ProjectTitle>
                    <ProjectLink href={github_url} target="_blank" rel="noopener noreferrer">
                        <Icon src={github} alt=""/>
                        <span>{name}</span>
                    </ProjectLink>
                </ProjectTitle>
            </Project>
        </ProjectContainer>
    );
}

export default ProjectCard