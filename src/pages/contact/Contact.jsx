import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import MatterBackground from '../home/MatterBackground.jsx';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 50px;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 30px;
  letter-spacing: 1.5px;
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  resize: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(255, 65, 108, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(255, 65, 108, 0.6);
  }
`;

const Message = styled.span`
  font-size: 18px;
  margin-top: 20px;
  color: ${props => (props.success ? "lightgreen" : "red")};
`;

const Contact = () => {
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your email service ID
        "your_template_id", // Replace with your template ID
        e.target,
        "your_user_id" // Replace with your user ID
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );

    e.target.reset();
  };

  return (
    <Section>
      <MatterBackground />
      <Overlay />
      <Container>
        <Title>Get In Touch</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" name="name" required />
          <Input type="email" placeholder="Your Email" name="email" required />
          <TextArea
            placeholder="Your Message"
            rows="6"
            name="message"
            required
          />
          <Button type="submit">Send Message</Button>
          {success !== null && (
            <Message success={success}>
              {success
                ? "Your message has been sent successfully!"
                : "Oops! Something went wrong. Please try again."}
            </Message>
          )}
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;
