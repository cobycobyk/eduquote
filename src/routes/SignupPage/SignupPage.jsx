import React, {useState} from "react"
import { AuthColumnLeft, AuthColumnRight, AuthContainer, AuthImg, AuthRow, CardTitlee, FormExRow, FormLabel, Formm, RegisterButton, RegisterExtraButton, RegisterExtraLink, SignupCard, SignupColumn, SignupColumnFull, SignupInput, SignupLabelRow, SignupRow } from "./SignupPage.styles"
import login from '../../assets/images/login/login.svg';
import * as Icon from "react-feather";
import { Danger, TextDivider } from "../../assets/css/custom.styles";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import { redirect } from "react-router-dom";

const defaultFormData = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

export default function SignupPage() {
  const [formData, setFormData] = useState(defaultFormData);
  const { firstName, lastName, email, phoneNumber, password, confirmPassword } =
    formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    createAuthUserWithEmailAndPassword(email, password)
    redirect("/");
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  const disable = password !== confirmPassword;

  return (
    <React.Fragment>
      <AuthContainer>
        <AuthRow>
          <AuthColumnLeft>
            <AuthImg src={login} alt="signup" />
          </AuthColumnLeft>
          <AuthColumnRight>
            <SignupCard>
              <CardTitlee>Signup</CardTitlee>
              <Formm onSubmit={handleSubmit}>
                <SignupRow>
                  <SignupColumn>
                    <SignupLabelRow>
                      <Icon.User />
                      <FormLabel>
                        First Name <Danger>*</Danger>
                      </FormLabel>
                    </SignupLabelRow>
                    <SignupInput
                      type="text"
                      value={firstName}
                      name="firstName"
                      onChange={handleChange}
                      id="firstName"
                      placeholder="First Name"
                      required
                      errorMessage=""
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter first name",
                        },
                      }}
                    />
                  </SignupColumn>
                  <SignupColumn>
                    <SignupLabelRow>
                      <Icon.UserCheck />
                      <FormLabel>
                        Last name <Danger>*</Danger>
                      </FormLabel>
                    </SignupLabelRow>
                    <SignupInput
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                      id="lastName"
                      placeholder="Last Name"
                      required
                      errorMessage=""
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter last name",
                        },
                      }}
                    />
                  </SignupColumn>
                </SignupRow>
                <SignupRow>
                  <SignupColumn>
                    <SignupLabelRow>
                      <Icon.AtSign />
                      <FormLabel>
                        Email <Danger>*</Danger>
                      </FormLabel>
                    </SignupLabelRow>
                    <SignupInput
                      value={email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      required
                      errorMessage=""
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter your email",
                        },
                        pattern: {
                          value: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                          errorMessage: "E-Mail is not valid!",
                        },
                      }}
                    />
                  </SignupColumn>
                  <SignupColumn>
                    <SignupLabelRow>
                      <Icon.Phone />
                      <FormLabel>
                        Phone Number <Danger>*</Danger>
                      </FormLabel>
                    </SignupLabelRow>
                    <SignupInput
                      type="tel"
                      placeholder="Mobile number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleChange}
                      id="phoneNumber"
                      required
                      errorMessage=""
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter your phone number",
                        },
                        minLength: {
                          value: 6,
                        },
                        maxLength: {
                          value: 16,
                        },
                      }}
                    />
                  </SignupColumn>
                </SignupRow>
                <SignupRow>
                  <SignupColumn>
                    <SignupLabelRow>
                      <Icon.Lock />
                      <FormLabel>
                        Password<Danger>*</Danger>
                      </FormLabel>
                    </SignupLabelRow>
                    <SignupInput
                      type="password"
                      value={password}
                      onChange={handleChange}
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      required
                      errorMessage=""
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter Password",
                        },
                        minLength: {
                          value: 6,
                          errorMessage:
                            "Your password must be between 6 and 8 characters",
                        },
                        maxLength: {
                          value: 16,
                          errorMessage:
                            "Your password must be between 6 and 8 characters",
                        },
                      }}
                    />
                  </SignupColumn>
                  <SignupColumn>
                    <SignupLabelRow>
                      <Icon.Lock />
                      <FormLabel>
                        Confirm Password<Danger>*</Danger>
                      </FormLabel>
                    </SignupLabelRow>
                    <SignupInput
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                      id="confirmPassword"
                      placeholder="Confirm password"
                      required
                      errorMessage=""
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Please enter Password",
                        },
                        minLength: {
                          value: 6,
                          errorMessage:
                            "Your password must be between 6 and 8 characters",
                        },
                        maxLength: {
                          value: 16,
                          errorMessage:
                            "Your password must be between 6 and 8 characters",
                        },
                      }}
                    />
                  </SignupColumn>
                </SignupRow>
                <SignupColumnFull>
                  <RegisterButton type="submit" disable={disable}>
                    Register Your Account
                  </RegisterButton>
                </SignupColumnFull>
              </Formm>
              <FormExRow>
                <SignupColumnFull>
                  <RegisterExtraButton onClick={handleChange}>
                    Sign Up With Google
                  </RegisterExtraButton>
                </SignupColumnFull>
              </FormExRow>
              <SignupColumnFull>
                <TextDivider>Or</TextDivider>
                <h6>Already Have an account?</h6>
                <RegisterExtraLink to="/login">Sign In</RegisterExtraLink>
              </SignupColumnFull>
            </SignupCard>
          </AuthColumnRight>
        </AuthRow>
      </AuthContainer>
    </React.Fragment>
  );
}