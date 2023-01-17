import React, { useState } from "react";
import { Discount, PCFeature, PCFeatures, PCFeatureText, PCPrice, PCTitle, PricingCard, PricingCardContainer, PricingContainer, PricingSubtitle, PricingTitle, TimeToggle, Toggle, ToggleButton } from "./PricingPage.styles";
import * as Icon from "react-feather";

const pricingOptionsMonthly = [
  {
    id: 1,
    name: "Starter",
    price: 29,
    features: [
      "Create Unlimited Quotes",
      "Create Personalized Quotes",
      "Create Unlimited Quotes",
      "Create Personalized Quotes",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 39,
    features: [
      "Create Unlimited Quotes",
      "Create Personalized Quotes",
      "Create Unlimited Quotes",
      "Create Personalized Quotes",
    ],
  },
];
const pricingOptionsYearly = [
  {
    id: 1,
    name: "Starter",
    price: 300,
    features: [
      "Create Unlimited Quotess",
      "Create Personalized Quotes",
      "Create Unlimited Quotess",
      "Create Personalized Quotes",
    ],
  },
  {
    id: 2,
    name: "Pro",
    price: 400,
    features: [
      "Create Unlimited Quotes",
      "Create Personalized Quotes",
      "Create Unlimited Quotes",
      "Create Personalized Quotes",
    ],
  },
];

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
        <Discount>20%off</Discount>
      </TimeToggle>
      <PricingCardContainer>
        {timeOption
          ? pricingOptionsMonthly.map((option, key) => (
              <PricingCard key={key}>
                <PCTitle>{option.name}</PCTitle>
                <PCPrice>${option.price}</PCPrice>
                <PCFeatures>
                  {option.features.map((feature, key) => {
                    return (
                      <PCFeature key={key}>
                        <Icon.Check />
                        <PCFeatureText>{feature}</PCFeatureText>
                      </PCFeature>
                    );
                  })}
                </PCFeatures>
              </PricingCard>
            ))
          : pricingOptionsYearly.map((option, key) => (
              <PricingCard key={key}>
                <PCTitle>{option.name}</PCTitle>
                <PCPrice>${option.price}</PCPrice>
                <PCFeatures>
                  {option.features.map((feature, key) => {
                    return (
                      <PCFeature key={key}>
                        <Icon.Check />
                        <PCFeatureText>{feature}</PCFeatureText>
                      </PCFeature>
                    );
                  })}
                </PCFeatures>
              </PricingCard>
            ))}
      </PricingCardContainer>
    </PricingContainer>
  );
}