import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: 50px;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5.625rem;
  background-color: lightgrey;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const FooterColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 66.55%;
`;

export const FooterColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-basis: 33.33%;
`;

export const FooterTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const FooterSubtitle = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FooterEmail = styled.form`
  display: flex;
  align-items: center;
`;

export const FooterInput = styled.input`
  display: block;
  width: 40%;
  padding: 0.375rem 0.75rem;
  margin-right: 1rem;
  margin-top: 0 !important;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background-color: white;
  width: 5rem;
  height: 100%;

  :hover {
    background-color: orange;
  }
`;

export const FooterButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: white;
  border-radius: 10px;
  text-decoration: none;
  width: 50%;
  height: 3rem;
  color: black;

  :hover {
    background-color: orange;
    color: black;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
`;

export const FooterLink = styled(Link)`
  color: black;
  margin-right: 1rem;
  :hover {
    color: orange;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  margin-top: 5rem;
`;

export const FooterSocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0.6rem;
  background-color: grey;
  border-radius: 50%;
  margin-left: 1rem;
  :hover {
    color: black;
  }
`;