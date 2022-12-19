import React, { useState } from "react"
import login from "../../assets/images/login/login.svg";
import * as Icon from "react-feather";
import { Danger, TextDivider } from "../../assets/css/custom.styles";
import { AuthColumnLeft, AuthColumnRight, AuthContainer, AuthImg, AuthRow, CardTitlee, ErrorMessage, ForgotPass, FormInput, FormLabel, Formm, RegisterButton, RegisterExtraButton, RegisterExtraLink, ResetMessage, SignupCard, SignupColumnFull, SignupLabelRow, SignupLabelRowPass, SignupRow } from "../SignupPage/SignupPage.styles";

const defaultFormData = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [formData, setFormData] = useState(defaultFormData);
  const {
    email,
    password,
  } = formData;
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleResetPassword = () => {
    console.log('resetpassword')
  }
  return (
    <React.Fragment>
      <AuthContainer>
        <AuthRow>
          <AuthColumnLeft>
            <AuthImg src={login} alt="signup" />
          </AuthColumnLeft>
          <AuthColumnRight>
            <SignupCard>
              <CardTitlee>Login</CardTitlee>
              <Formm onSubmit={handleSubmit}>
                <SignupRow>
                  <SignupColumnFull>
                    <SignupLabelRow>
                      <Icon.AtSign />
                      <FormLabel>
                        Email <Danger>*</Danger>
                      </FormLabel>
                    </SignupLabelRow>
                    <FormInput
                      type="text"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
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
                  </SignupColumnFull>
                </SignupRow>
                <SignupRow>
                  <SignupColumnFull>
                    <SignupLabelRowPass>
                      <SignupLabelRow>
                        <Icon.Lock />
                        <FormLabel>
                          Password <Danger>*</Danger>
                        </FormLabel>
                      </SignupLabelRow>
                      <ForgotPass onClick={handleResetPassword}>
                        Forgot Password?
                      </ForgotPass>
                    </SignupLabelRowPass>
                    <FormInput
                      name="password"
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
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
                  </SignupColumnFull>
                </SignupRow>
                <SignupRow>
                  {error.length && <ErrorMessage>{error}</ErrorMessage>}
                  {message && <ResetMessage>{message}</ResetMessage>}
                </SignupRow>
                <SignupColumnFull>
                  <RegisterButton type="submit">Sign in</RegisterButton>
                </SignupColumnFull>
              </Formm>
              <SignupColumnFull>
                <RegisterExtraButton onClick={handleChange}>
                  Sign in with Google
                </RegisterExtraButton>
              </SignupColumnFull>
              <SignupColumnFull>
                <TextDivider>or</TextDivider>
                <h6>Don't have an account?</h6>
                <RegisterExtraLink to="/signup">
                  Sign Up
                </RegisterExtraLink>
              </SignupColumnFull>
            </SignupCard>
          </AuthColumnRight>
        </AuthRow>
      </AuthContainer>
    </React.Fragment>
  );
}