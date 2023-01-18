import React, { useContext } from "react";
import * as Icon from "react-feather";
import { QuoteSection, QuoteTitle } from "../../components/Quote/Quote.styles";
import { UserContext } from "../../context/user.context";
import { FormLabel, SignupColumn, SignupInput, SignupLabelRow, SignupRow } from "../SignupPage/SignupPage.styles";
import { ProfileSection } from "./AccountPage.styles";

export default function ProfilePage() {
  const { currentUserInfo } = useContext(UserContext);

  return (
    <React.Fragment>
      <ProfileSection>
        <QuoteTitle>Profile Details</QuoteTitle>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.User />
              <FormLabel>First Name</FormLabel>
            </SignupLabelRow>
            <SignupInput
              name="firstName"
              id="firstName"
              type="text"
              className="form-control"
              required
              disabled
              errormessage=""
              placeholder={
                currentUserInfo.firstName ? currentUserInfo.firstName : "First Name :"
              }
              value={currentUserInfo.firstName}
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.UserCheck />
              <FormLabel>Last Name</FormLabel>
            </SignupLabelRow>
            <SignupInput
              name="lastName"
              id="lastName"
              type="text"
              className="form-control"
              required
              disabled
              errormessage=""
              placeholder={
                currentUserInfo.lastName ? currentUserInfo.lastName : "Last Name :"
              }
              value={currentUserInfo.lastName}
            />
          </SignupColumn>
        </SignupRow>
        <SignupRow>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.Mail />
              <FormLabel>Your Email</FormLabel>
            </SignupLabelRow>
            <SignupInput
              name="email"
              id="email"
              type="email"
              className="form-control"
              disabled
              placeholder={currentUserInfo.email ? currentUserInfo.email : "Email :"}
              value={currentUserInfo.email}
            />
          </SignupColumn>
          <SignupColumn>
            <SignupLabelRow>
              <Icon.Phone />
              <FormLabel>Phone No. :</FormLabel>
            </SignupLabelRow>
            <SignupInput
              required
              errormessage=""
              name="phoneNumber"
              id="phoneNumber"
              type="number"
              disabled
              className="form-control"
              placeholder={
                currentUserInfo.phoneNumber ? currentUserInfo.phoneNumber : "Phone :"
              }
              value={currentUserInfo.phoneNumber}
            />
          </SignupColumn>
        </SignupRow>
      </ProfileSection>
    </React.Fragment>
  );
}