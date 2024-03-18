"use client";
import React, { useState } from "react";
import { ShortInput, LongInput } from "./form_inputs";

// Information to describe the form
interface FormProps {
  id: string;
  name: string;
  inputs: string[];
}

// Data collected by the form depending on inputs
interface FormDataProps {
  [key: string]: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [formData, setFormData] = useState<FormDataProps>({});

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
    // Data currently just logged, needs to be linked to a backend
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({});
  };

  // Three main types of inputs, email, long, and short
  const renderInputs = (input: string) => {
    switch (input) {
      case input.includes("email") ? input : "":
        return (
          <ShortInput
            name={input}
            type="email"
            placeholder={"Enter your " + input}
            style=""
            onChange={handleChange}
            data={formData[input] || ""}
          />
        );
      // Can use other key words to determine if the input should be a long input
      case input.includes("message") ? input : "":
        return (
          <LongInput
            name={input}
            type="text"
            placeholder={"Enter your " + input}
            style=" h-32"
            onChange={handleChange}
            data={formData[input] || ""}
          />
        );
      // Short answer input unless otherwise specified
      default:
        return (
          <ShortInput
            name={input}
            type="text"
            placeholder={"Enter your " + input}
            style=""
            onChange={handleChange}
            data={formData[input] || ""}
          />
        );
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
