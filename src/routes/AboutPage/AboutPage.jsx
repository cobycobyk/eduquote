import React from "react";
import { AboutBody1, AboutBody4, AboutColumn, AboutColumnImg, AboutColumnImg2, AboutColumnLeft, AboutContainer, AboutImg, AboutLink, AboutRow, AboutSection2, AboutSh1, AboutSh3 } from "./AboutPage.styles";
import login from "../../assets/images/login/login.svg";


export default function AboutPage() {
  return (
    <React.Fragment>
      <AboutContainer>
        <AboutRow>
          <AboutColumnLeft>
            <AboutSh1>Our Story</AboutSh1>
            <AboutBody1>This is our story</AboutBody1>
            <AboutLink>Try Now</AboutLink>
          </AboutColumnLeft>
          <AboutColumnImg>
            <AboutImg src={login} alt="about" />
          </AboutColumnImg>
        </AboutRow>
      </AboutContainer>
      <AboutSection2>
        <AboutContainer>
          <AboutRow>
            <AboutColumnImg2>
              <AboutImg src={login} alt="about2" />
            </AboutColumnImg2>
            <AboutColumn>
              <AboutSh3>
                Experience
              </AboutSh3>
              <AboutBody4>
                This is our experience
              </AboutBody4>
            </AboutColumn>
          </AboutRow>
        </AboutContainer>
      </AboutSection2>
      <AboutContainer>
        <AboutRow>
          <AboutColumn>
            <AboutSh3>About 3</AboutSh3>
            <AboutBody4>body text</AboutBody4>
          </AboutColumn>
          <AboutColumnImg>
            <AboutImg src={login} alt="about3" />
          </AboutColumnImg>
        </AboutRow>
      </AboutContainer>
    </React.Fragment>
  );
}