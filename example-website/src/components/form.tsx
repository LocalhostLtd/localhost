"use client";
import React, { useState } from "react";
import { ShortInput, LongInput, MenuInput } from "./form_inputs";

// Information to describe the form
interface FormProps {
  id: string;
  name: string;
  inputs: Array<[string, string, string[]]>;
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
  const renderInputs = (input: [string, string, string[]]) => {
    const [inputName, inputType, inputOptions] = input;

    switch (inputType) {
      case inputType.includes("email") ? inputType : "":
        return (
          <ShortInput
            name={inputName}
            type="email"
            placeholder={"Enter your " + inputName}
            onChange={handleChange}
            data={formData[inputName] || ""}
          />
        );
      // Can use other key words to determine if the input should be a long input
      case inputType.includes("message") ? inputType : "":
        return (
          <LongInput
            name={inputName}
            type="text"
            placeholder={"Enter your " + inputName}
            style=" h-32"
            onChange={handleChange}
            data={formData[inputName] || ""}
          />
        );
      case inputType.includes("menu") ? inputType : "":
        return (
          <MenuInput
            name={inputName}
            type="text"
            placeholder=""
            onChange={handleChange}
            data={formData[inputName] || ""}
            menu_options={inputOptions}
          />
        );
      // Short answer input unless otherwise specified
      default:
        return (
          <ShortInput
            name={inputName}
            type="text"
            placeholder={"Enter your " + input}
            onChange={handleChange}
            data={formData[inputName] || ""}
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
