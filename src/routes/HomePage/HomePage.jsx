import React from "react";
import homeshape from '../../assets/images/homepage/home-shape.png';
import home from "../../assets/images/homepage/home.png";
import { BackgroundImage, ButtonText, HomeActionLink, HomeBody1, HomeClientsContainer, HomeHeroImg, HomePartImg, HomePartImgColumn, HomePartSection, HomeSectionColumn, HomeSectionContainer, HomeSh1, HomeSh2, HomeSh3, HomeSh4 } from "./HomePage.styles";
import * as Icon from "react-feather";

import img1 from '../../assets/images/partners/amazon.svg';
import img2 from '../../assets/images/partners/google.svg';
import img3 from '../../assets/images/partners/lenovo.svg';
import img4 from '../../assets/images/partners/paypal.svg';
import img5 from '../../assets/images/partners/shopify.svg';
import img6 from '../../assets/images/partners/spotify.svg';

const partners = [
  {image: img1},
  {image: img2},
  {image: img3},
  {image: img4},
  {image: img5},
  {image: img6},
]

export default function HomePage() {
  return (
    <BackgroundImage imageUrl={homeshape}>
      <HomeSectionContainer>
        <HomeSectionColumn>
          <HomeSh1>
            <span>Quote</span> Builder
          </HomeSh1>
          <HomeBody1>
            The <span>efficient</span> way to buy and sell catalogued products
          </HomeBody1>
          <HomeActionLink to="/" color="orange">
            <ButtonText>Learn More</ButtonText>
            <Icon.ArrowRight />
          </HomeActionLink>
          <HomeHeroImg src={home} alt="home"/>
        </HomeSectionColumn>
      </HomeSectionContainer>
      <HomeClientsContainer>
        <HomeSectionColumn>
          <HomeSh2>Our Trusted Clients</HomeSh2>
          <HomeSh4>Start working with Quote Builder to generate quotes and get your product delivered quickly and efficiently.</HomeSh4>
        </HomeSectionColumn>
        <HomePartSection>
          {partners.map((partner, key) => (
            <HomePartImgColumn>
              <HomePartImg src={partner.image} alt="partnerimage"/>
            </HomePartImgColumn>
          ))}
        </HomePartSection>
      </HomeClientsContainer>
    </BackgroundImage>
  );
}