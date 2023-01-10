import styled from "styled-components";

export const QuoteSectionContainer = styled.div`
  width: 100%;
  padding: 5.625rem 2rem 0 2rem;
  display: flex;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
export const QuoteSectionLeft = styled.div`
  flex-basis: 70%;
`
export const QuoteSectionRight = styled.div`
  flex-basis: 30%;
`