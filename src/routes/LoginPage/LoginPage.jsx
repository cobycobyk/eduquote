import React, { useState } from "react"
import login from "../../assets/images/login/login.svg";
import * as Icon from "react-feather";
import { Danger, TextDivider } from "../../assets/css/custom.styles";
import { AuthColumnLeft, AuthColumnRight, AuthContainer, AuthImg, AuthRow, CardTitlee, ErrorMessage, ForgotPass, FormInput, FormLabel, Formm, RegisterButton, RegisterExtraButton, RegisterExtraLink, ResetMessage, SignupCard, SignupColumnFull, SignupLabelRow, SignupLabelRowPass, SignupRow } from "../SignupPage/SignupPage.styles";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase";

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

  const resetFormFields = () => {
    setFormData(defaultFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setError("incorrect password for email");
          break;
        case "auth/user-not-found":
          setError("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const googleSignIn = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user)
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleResetPassword = async () => {
    if (!formData.email) {
      return setError("Please enter your email");
    } else {
      setError(false);
    }
    const response = await sendPasswordReset(formData.email);
    if (response === true) {
      setMessage("Please check email for password reset");
    } else if (response === "auth/invalid-email") {
      setMessage(false);
      setError("Invalid Email, please enter a correct email");
    } else if (response === "auth/user-not-found") {
      setMessage(false);
      setError("User Not Found");
    }
  };
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
                <RegisterExtraButton onClick={googleSignIn}>
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