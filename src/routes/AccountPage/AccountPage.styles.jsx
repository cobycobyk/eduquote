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
`;

export const AccountColumn = styled.div`
  margin-top: 2rem;
  flex-basis: 33.33%;
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
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 0.5rem;
  padding: 1rem;
  list-style: none;
  margin: 1.5rem 1rem;
`;

export const AccountLi = styled.li`
  margin-top: 0.5rem;
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
`;