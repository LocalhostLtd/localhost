"use client";
import React, { useState } from "react";
import { ShortInput, LongInput, MenuInput, SliderInput } from "./Form_inputs";

// Information to describe the form
interface FormProps {
  id: string;
  name: string;
  inputs: Array<[string, string, string, string[]]>;
  type?: string;
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
    if (props.type === "email") {
      // To be implemented with email service
      return;
    } else if (props.type === "store") {
      // To be implemented with database
      return;
    }

    e.preventDefault();
    // Data currently just logged, needs to be linked to a backend
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({});
  };

  // Three main types of inputs, email, long, and short
  const renderInputs = (input: [string, string, string, string[]]) => {
    const [inputName, inputType, inputPlaceholder, inputOptions] = input;
    const isRequired = inputType.includes("required");
    return (
      <div className="mb-6">
        {inputType.includes("long") ? (
          <LongInput
            name={inputName}
            type="text"
            placeholder={inputPlaceholder || "Enter your " + inputName}
            style=" h-32"
            onChange={handleChange}
            data={formData[inputName] || ""}
            required={isRequired}
          />
        ) : inputType.includes("menu") ? (
          <MenuInput
            name={inputName}
            onChange={handleChange}
            data={formData[inputName] || ""}
            required={isRequired}
            options={inputOptions}
          />
        ) : inputType.includes("slider") ? (
          <SliderInput
            name={inputName}
            options={inputOptions}
            onChange={handleChange}
            data={formData[inputName] || inputOptions[0] || ""}
            required={isRequired}
          />
        ) : (
          <ShortInput
            name={inputName}
            type={inputType}
            placeholder={inputPlaceholder || "Enter your " + inputName}
            onChange={handleChange}
            data={formData[inputName] || ""}
            required={isRequired}
          />
        )}
      </div>
    );
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
