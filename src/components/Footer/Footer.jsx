import React, {useState} from "react";
import { FooterButton, FooterColumnLeft, FooterColumnRight, FooterContainer, FooterEmail, FooterInput, FooterLink, FooterLinks, FooterSocialIcon, FooterSocials, FooterSubtitle, FooterTitle, FooterWrapper, SendButton } from "./Footer.styles";
import * as Icon from "react-feather";

const footerLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Build A Quote", link: "/quote" },
  { id: 4, title: "Case Studies", link: "/casestudies" },
  { id: 5, title: "How-To", link: "/howto" },
  { id: 6, title: "Pricing", link: "/pricing" },
  { id: 7, title: "About", link: "/about" },
  { id: 8, title: "Contact", link: "/contact" },
]

export default function Footer() {
  const [info, setInfo] = useState("");

  const handleChange = (evt) => {
    setInfo(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitted");
  };
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumnLeft>
          <FooterTitle>Join our mailing list</FooterTitle>
          <FooterSubtitle>
            Be the first to know about info from QuoteBuilder!
          </FooterSubtitle>
          <FooterEmail onSubmit={handleSubmit}>
            <FooterInput
              type="text"
              name="email"
              id="email"
              value={info}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <SendButton type="submit">
              <Icon.Send />
            </SendButton>
          </FooterEmail>
          <FooterLinks>
            {footerLinks.map((link, key) => {
              return (
                <FooterLink to={link.link} key={key}>
                  {link.title}
                </FooterLink>
              );
            })}
          </FooterLinks>
        </FooterColumnLeft>
        <FooterColumnRight>
          <FooterSubtitle>Are you a salesperson or distributor?</FooterSubtitle>
          <FooterButton to="/contact">Contact us here</FooterButton>
          <FooterSocials>
            <FooterSocialIcon
              href="https://www.facebook.com"
              target="_blank"
            >
              <Icon.Facebook />
            </FooterSocialIcon>
            <FooterSocialIcon
              href="https://www.instagram.com"
              target="_blank"
            >
              <Icon.Instagram />
            </FooterSocialIcon>
            <FooterSocialIcon
              href="https://twitter.com"
              target="_blank"
            >
              <Icon.Twitter />
            </FooterSocialIcon>
            <FooterSocialIcon
              href="https://www.linkedin.com"
              target="_blank"
            >
              <Icon.Linkedin />
            </FooterSocialIcon>
          </FooterSocials>
        </FooterColumnRight>
      </FooterContainer>
    </FooterWrapper>
  );
}