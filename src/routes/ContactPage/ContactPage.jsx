import React, {useState} from "react"
import login from "../../assets/images/login/login.svg";
import * as Icon from "react-feather";
import { ContactColumnLeft, ContactColumnRight, ContactContainer, ContactImg, ContactRow, FormExButton, FormExColumn } from "./ContactPage.styles";
import { CardTitlee, FormLabel, Formm, SignupCard, SignupColumn, SignupColumnFull, SignupInput, SignupLabelRow, SignupRow } from "../SignupPage/SignupPage.styles";
import { Danger } from "../../assets/css/custom.styles";

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  comments: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value })
  };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submitted');
  };

  return (
    <ContactContainer>
      <ContactRow>
        <ContactColumnLeft>
          <SignupCard>
            <CardTitlee>Get In Touch!</CardTitlee>
            <Formm onSubmit={handleSubmit}>
              <SignupRow>
                <SignupColumn>
                  <SignupLabelRow>
                    <Icon.User />
                    <FormLabel>
                      Name<Danger>*</Danger>
                    </FormLabel>
                  </SignupLabelRow>
                  <SignupInput
                    name="name"
                    id="name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Name:"
                    required
                  />
                </SignupColumn>
                <SignupColumn>
                  <SignupLabelRow>
                    <Icon.AtSign />
                    <FormLabel>
                      Email <Danger>*</Danger>
                    </FormLabel>
                  </SignupLabelRow>
                  <SignupInput
                    name="email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email:"
                    required
                  />
                </SignupColumn>
              </SignupRow>
              <SignupColumnFull>
                <SignupLabelRow>
                  <Icon.Zap />
                  <FormLabel>Subject</FormLabel>
                </SignupLabelRow>
                <SignupInput
                  name="subject"
                  id="subject"
                  placeholder="Subject:"
                  onChange={handleChange}
                  value={formData.subject}
                  required
                />
              </SignupColumnFull>
              <SignupColumnFull>
                <SignupLabelRow>
                  <Icon.Mail />
                  <FormLabel>Message</FormLabel>
                </SignupLabelRow>
                <SignupInput
                  as="textarea"
                  name="comments"
                  id="comments"
                  onChange={handleChange}
                  value={formData.comments}
                  rows="4"
                  placeholder="Message:"
                />
              </SignupColumnFull>
              <FormExColumn>
                <FormExButton
                  type="submit"
                  id="submit"
                  name="send"
                  value="Send Message"
                >
                  Send Message
                </FormExButton>
              </FormExColumn>
            </Formm>
          </SignupCard>
        </ContactColumnLeft>
        <ContactColumnRight>
          <ContactImg src={login} alt="contact" />
        </ContactColumnRight>
      </ContactRow>
    </ContactContainer>
  );
};