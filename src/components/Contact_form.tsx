"use client";
import React from "react";
import { default as Form, FormDataProps } from "./Form";

const ContactForm: React.FC = () => {
  function assumeData(formData: FormDataProps) {
    console.log(formData.email);
  }

  const inputs: [string, string, string, string[]][] = [
    ["name", "short required", "Enter your name", []],
    ["email", "short required", "Enter your email", []],
    ["message", "long required", "Enter your message", []],
  ];

  return (
    <>
      <Form
        id="contact"
        name="Contact Form"
        inputs={inputs}
        onsubmit={assumeData}
      />
    </>
  );
};

export default ContactForm;
