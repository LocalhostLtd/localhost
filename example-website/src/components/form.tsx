"use client";
import React, { useState } from "react";

interface FormProps {
  id: string;
  name: string;
}

// Data collected by the form
interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

// For setting the appropriate props for the input and textarea tags
interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  style: string;
  data: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

// Used for shorter inputs, i.e. name and email
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={props.name.toLowerCase()}
        className="block text-sm font-medium text-gray-700"
      >
        {props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}
      </label>
      <input
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        type={props.type}
        className={"input input-bordered " + props.style}
        placeholder={props.placeholder}
        value={props.data}
        onChange={props.onChange}
      />
    </div>
  );
};

// Long input uses the textarea tag instead of the input tag
// Would be better to use a single component for both inputs and textareas
const LongInput: React.FC<InputProps> = (props) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor={props.name.toLowerCase()}
        className="block text-sm font-medium text-gray-700"
      >
        {props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}
      </label>
      <textarea
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        className={"input input-bordered" + props.style}
        placeholder={props.placeholder}
        cols={40}
        value={props.data}
        onChange={props.onChange}
      />
    </div>
  );
};

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
    if (formData.email.trim() != "") {
      // Data currently just logged, needs to be linked to a backend
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // Form input components created in return
  // need to find a way to adjust the number and type of inputs for different types of forms
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">{props.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          type="text"
          placeholder="Enter your name"
          style=""
          onChange={handleChange}
          data={formData.name}
        />
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          style=""
          onChange={handleChange}
          data={formData.email}
        />
        <LongInput
          name="message"
          type="text"
          placeholder="Enter your message"
          style=" h-32"
          onChange={handleChange}
          data={formData.message}
        />
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
