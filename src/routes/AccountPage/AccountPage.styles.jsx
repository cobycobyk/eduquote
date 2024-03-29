import { Link } from "react-router-dom";
import styled from "styled-components";

export const AccountContainer = styled.section`
  width: 100%;
  padding: 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 5.625rem 1rem 1rem 1rem;
  }
`;

export const AccountRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AccountColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`;
export const AccountPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;

export const AccountPhoto = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
export const AccountPhotoHelloContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 1rem;
`;
export const AccountPhotoHello = styled.div`
  color: #6c757d;
  font-size: 1rem;
`;
export const AccountPhotoName = styled.div`
  font-size: 1.25rem;
`;
export const AccountUl = styled.ul`
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 0.5rem;
  padding: 1rem;
  list-style: none;
  margin: 1.5rem 1rem;
  @media only screen and (max-width: 600px) {
    margin: 0.5rem 0.5rem;
    width: 100%;
    padding: 0.5rem;
  }
`;

export const AccountLi = styled.li`
  margin: 0 1rem;
  width: 10rem;
  @media only screen and (max-width: 600px) {
    width: 3rem;
  }
`;

export const AccountLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #3c4858;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;
export const AccountLinkTitle = styled.div`
  align-self: center;
  margin-left: 0.5rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 66.66%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
