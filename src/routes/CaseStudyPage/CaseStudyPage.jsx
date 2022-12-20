import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { CaseColumnLeft, CaseIcon, CaseRow, CaseSh1 } from "../CaseStudiesPage/CaseStudiesPage.styles";
import { HomeSectionContainer } from "../HomePage/HomePage.styles";
import { CaseBody1, CaseColumn, CaseColumnRight, CaseContainer, CaseHero, CaseImg, CaseLink, CaseSh4, CaseTitleRow } from "./CaseStudyPage.styles";

export default function CaseStudyPage() {
  const location = useLocation();
  const {project} = location.state;
  
  return project ? (
    <React.Fragment>
      <CaseHero hero={project.icon}>
        <CaseContainer>
          <CaseColumn>
            <CaseSh4>{project.name}</CaseSh4>
            {project.video && <CaseVideoLink href={project.video} target="_blank" color="orange">
              Watch Video
            </CaseVideoLink>
            }
          </CaseColumn>
        </CaseContainer>
      </CaseHero>
      <HomeSectionContainer>
        <CaseRow>
          <CaseColumnLeft>
            <CaseTitleRow>
              <CaseIcon src={project.icon} alt="icon" />
              <CaseSh1>Project Description</CaseSh1>
            </CaseTitleRow>
            <CaseBody1>{project.desc}</CaseBody1>
            <CaseLink to="/casestudies" color="orange">
              Back To Projects
            </CaseLink>
          </CaseColumnLeft>
          <CaseColumnRight>
            <CaseImg src={project.graphic} alt="graphic" />
          </CaseColumnRight>
        </CaseRow>
      </HomeSectionContainer>
    </React.Fragment>
  ) : (
    <div>Loading</div>
  );
}