import React from "react";

import {SkillContainer,Icon,DescriptionContainer,Description,DescriptionTitle} from './OfferingskillsStyles'


function Offeringskills({icon,title,about}) {
  return (
    <SkillContainer>
      <Icon src={icon} />
      <DescriptionContainer>
        <DescriptionTitle>{title}</DescriptionTitle>
        <Description>{about}</Description>
      </DescriptionContainer>
    </SkillContainer>
  );
}

export default Offeringskills