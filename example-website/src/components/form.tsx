"use client";
import React, { useState } from "react";
import { ShortInput, LongInput } from "./form_inputs";

// Information to describe the form
interface FormProps {
  id: string;
  name: string;
  inputs: string[];
}

// Data collected by the form
// Need to be able to adjust the form to collect different types of data
interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    message: "",
  });

  // When the text in one of the inputs changes, updating the value of the appropriate form property
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // The email must be filled in to submit the form
    if (formData.email.trim() !== "") {
      // Data currently just logged, needs to be linked to a backend
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // Three types of inputs: text (short input), email (contact), and message (long input)
  const renderInputs = (input: string) => {
    switch (input) {
      case "name":
        return (
          <ShortInput
            name={input}
            type="text"
            placeholder={"Enter your name"}
            style=""
            onChange={handleChange}
            data={formData.name}
          />
        );
      case "email":
        return (
          <ShortInput
            name="email"
            type="email"
            placeholder="Enter your email"
            style=""
            onChange={handleChange}
            data={formData.email}
          />
        );
      case "message":
        return (
          <LongInput
            name="message"
            type="text"
            placeholder="Enter your message"
            style=" h-32"
            onChange={handleChange}
            data={formData.message}
          />
        );
      // If not email or message, short answer input labeled with the input name
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">{props.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {props.inputs.map((input, index) => (
            <React.Fragment key={index}>{renderInputs(input)}</React.Fragment>
          ))}
        </div>
        <div>
          <button type="submit" className="btn btn-outline">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
