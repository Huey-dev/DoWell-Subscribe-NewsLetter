import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    // Check if name contains only letters
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setNameError("Name can only contain letters");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Check if email contains "@" and ".com"
    if (!value.includes("@") || !value.includes(".com")) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
    }, 5000); // Set the timeout to 5000 milliseconds (5 seconds)

    // Clear form data
    setName("");
    setEmail("");
    setAgree(false);
    setNameError("");
    setEmailError("");
  };

  return (
    <div>
      {subscribed && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Subscribed!</strong>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
          </span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={handleAgreeChange}
            className="mr-2"
          />
          <label htmlFor="agree" className="text-gray-700">
            I agree to receive marketing material
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          disabled={!name || !email || !agree || nameError || emailError}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
