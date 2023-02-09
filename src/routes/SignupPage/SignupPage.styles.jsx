import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthContainer = styled.div`
  padding: 3.75rem 5.625rem 3.75rem 5.625rem;
  @media (max-width: 768px) {
    padding: 0 0 0 0;
  }
`;
export const AuthRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const AuthColumnLeft = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: start;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 768px) {
    padding: 0 1rem 0 1rem;
    justify-content: center;
  }
`;
export const AuthColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 40%;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
export const AuthImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 40px 0;
`;

export const SignupCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
export const SignupCardDark = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
export const CardTitlee = styled.h4`
  padding-bottom: 1rem;
  font-weight: bold;
  text-align: center;
`;
export const CardTitleeDark = styled.h4`
  padding-bottom: 1rem;
  font-weight: bold;
  text-align: center;
  color: var(--sidebar-dark-menu-item-color);
`;
export const Formm = styled.form`
  display: block;
`;
export const SignupRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SignupColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const SignupLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;
export const SignupLabelRowDark = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  color: var(--sidebar-dark-menu-item-color);
`;
export const FormLabel = styled.label`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
export const FormLabelDark = styled.label`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  color: var(--sidebar-dark-menu-item-color);
`;
export const SignupInput = styled.input`
  display: block;
  width: 90%;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: var(--gray-700);
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const SignupSelect = styled.select`
  display: block;
  width: 90%;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const SignupColumnFull = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const RegisterButton = styled.button`
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
export const RegisterButtonDark = styled.button`
  border-radius: 30px;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: var(--gray-100);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  background-color: var(--gray-500);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  :hover {
    color: var(--gray-500);
    background-color: var(--gray-100);
  }
`;
export const FormExRow = styled.div``;
export const RegisterExtraButton = styled.button`
  border-radius: 30px;
  border: 1px solid black;
  padding: 10px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 0.05rem;

  :hover {
    color: white;
    background-color: grey;
    border: 1px solid grey;
  }
`;
export const RegisterExtraLink = styled(Link)`
  border-radius: 30px;
  border: 1px solid black;
  padding: 10px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-size: 1rem;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 0.05rem;
  text-decoration: none;

  :hover {
    color: white;
    background-color: grey;
    border: 1px solid grey;
  }
`;
export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
export const SignupLabelRowPass = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ErrorMessage = styled.div`
  color: red;
`;
export const ResetMessage = styled.div`
  color: green;
`;
export const ForgotPass = styled.div`
  color: black;
  text-decoration: underline;
  font-style: italic;

  :hover {
    color: blue;
    cursor: pointer;
  }
`;