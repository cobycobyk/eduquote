import styled from "styled-components";

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5.625rem;
  background-color: white;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
export const PricingTitle = styled.h3``;
export const PricingSubtitle = styled.h6``;
export const TimeToggle = styled.div`
  display: flex;
  align-items: center;
`;
export const Toggle = styled.div`
  display: flex;
  justify-content: ${({ time }) =>
    time === true ? "start" : "end"};
  margin: 0 10px;
  border: 1px solid black;
  border-radius: 20px;
  width: 3.5vw;
  height: 1.5vw;
  :hover {
    cursor: pointer;
  }
`;
export const ToggleButton = styled.div`
  width: 1.5vw;
  border-radius: 20px;;
  background-color: orange;
`;
export const Discount = styled.div`
  color: orange;
  margin-left: 5px;
  border: 1px solid orange;
  border-radius: 1rem;
  font-size: 0.75rem;
  padding: 0.25rem;
`;
export const PricingCardContainer = styled.div`
  display: flex;
`;
export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
  background-color: lightgrey;
`;
export const PCTitle = styled.div`
  font-weight: bold;
`;
export const PCPrice = styled.div`
  font-weight: bold;
  color: grey;
`;
export const PCFeatures = styled.div`
  align-items: start;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const PCFeature = styled.div`
  display: flex;
`;
export const PCFeatureText = styled.div`
  margin-left: 5px;
`;