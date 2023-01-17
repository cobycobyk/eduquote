import React, { useState } from "react";
import { PCPrice, PCTitle, PricingCard, PricingCardContainer, PricingContainer, PricingSubtitle, PricingTitle, TimeToggle, Toggle, ToggleButton } from "./PricingPage.styles";
import { priceFormatter } from "../../utils/helperFunctions/PriceFormatter";

const pricingOptionsMonthly = [
  {id: 1, name: "Starter", price: 29, features: ["Create Unlimited Quotes", "Create Personalized Quotes"]},
  {id: 2, name: "Pro", price: 39, features: ["Create Unlimited Quotes", "Create Personalized Quotes"]}
]
const pricingOptionsYearly = [
  {id: 1, name: "Starter", price: 300, features: ["Create Unlimited Quotes", "Create Personalized Quotes"]},
  {id: 2, name: "Pro", price: 400, features: ["Create Unlimited Quotes", "Create Personalized Quotes"]}
]

export default function PricingPage() {
  const [timeOption, setTimeOption] = useState(true);
  return (
    <PricingContainer>
      <PricingTitle>Ready To Get Started?</PricingTitle>
      <PricingSubtitle>
        14 days unlimited free trial. No contract or credit card required.
      </PricingSubtitle>
      <TimeToggle>
        <div>Monthly</div>
        <Toggle time={timeOption} onClick={() => setTimeOption(!timeOption)}>
          <ToggleButton></ToggleButton>
        </Toggle>
        <div>Yearly</div>
        <div>20%off</div>
      </TimeToggle>
      <PricingCardContainer>
        {timeOption
          ? pricingOptionsMonthly.map((option, key) => (
              <PricingCard>
                <PCTitle>{option.name}</PCTitle>
                <PCPrice>${option.price}</PCPrice>
              </PricingCard>
            ))
          : pricingOptionsYearly.map((option, key) => (
              <PricingCard>
                <PCTitle>{option.name}</PCTitle>
                <PCPrice>${option.price}</PCPrice>
              </PricingCard>
            ))}
      </PricingCardContainer>
    </PricingContainer>
  );
}