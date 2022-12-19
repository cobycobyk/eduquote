import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 0 5.625rem 0 5.625rem;
  @media only screen and (max-width: 600px) {
    padding: 0 0 0 0;
  }
`;
export const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ContactColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
    width: 100%;
  }
`;
export const ContactColumnRight = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: end;
  align-items: end;
  @media only screen and (max-width: 600px) {
    padding: 0 1rem 0 1rem;
  }
`;
export const ContactImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 1.5rem;
  padding: 40px 0 0 0;
`;
export const FormExColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;
export const FormExButton = styled.button`
  border-radius: 30px;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  background-color: lightgrey;
  margin-top: 0.5rem;
  margin-bottom: 0.05rem;

  :hover {
    color: white;
    background-color: orange;
  }
`;