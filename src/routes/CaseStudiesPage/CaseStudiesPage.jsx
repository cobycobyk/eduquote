import React from "react";
import * as Icon from "react-feather";
import login from "../../assets/images/login/login.svg";
import { CaseBody, CaseCard, CaseCardBody, CaseCardImg, CaseColumnLeft, CaseContainer, CaseHeroRow, CaseIcon, CaseLink, CaseP, CaseRow, CaseSh1, CaseSh2, CaseTitle, CaseTopRow } from "./CaseStudiesPage.styles";

export const projects = [
  { id: 1, name: "Boxlight", card: login, icon: login, title: "Product", desc: "Boxlight: Educational Resources", link: "boxlight"},
  { id: 2, name: "Boxlight", card: login, icon: login, title: "Product", desc: "Boxlight: Educational Resources", link: "boxlight"},
  { id: 3, name: "Boxlight", card: login, icon: login, title: "Product", desc: "Boxlight: Educational Resources", link: "boxlight"},
]

export default function CaseStudiesPage() {
  return (
    <CaseContainer>
      <CaseHeroRow>
        <CaseColumnLeft>
          <CaseSh1>Case Studies</CaseSh1>
          <CaseP>
            Our team understands the importance and impact of the quoting
            process. Here are what some of our customers have to say about us.
          </CaseP>
        </CaseColumnLeft>
      </CaseHeroRow>
      <CaseTitle>All case studies</CaseTitle>
      <CaseRow>
        {projects.map((project, key) => (
          <CaseCard key={key}>
            <CaseCardImg src={project.card} alt="cardimage" />
            <CaseCardBody>
              <CaseTopRow>
                <CaseIcon src={project.icon} alt="icon" />
                <CaseSh2>{project.title}</CaseSh2>
              </CaseTopRow>
              <CaseBody>{project.desc}</CaseBody>
              <CaseLink to={`/casestudies/${project.link}`} state={{project}}>
                Read More
                <Icon.ChevronRight />
              </CaseLink>
            </CaseCardBody>
          </CaseCard>
        ))}
      </CaseRow>
    </CaseContainer>
  );
}