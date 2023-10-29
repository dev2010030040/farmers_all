"use client";
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavBar } from '@/components';
const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formRef);
  };

  const handleClose = () => {
    setSubmitted(false);
  };
  return (
    <div className="py-10">
    <NavBar />
      <h1 className="text-center font-bold text-3xl text-orange-600 py-10">
        Contact Us
      </h1>

      {submitted && (
        <div className="flex justify-center">
          <div className="flex justify-between items-center">
            <span>
              Thank you for contacting us! We will reach you within 24 hours.
            </span>
            <button
              onClick={handleClose}
              className="text-gray-600 hover:text-red-500 focus:outline-none ml-4"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col md:grid md:grid-cols-3 p-10 gap-5"
      >
        <label htmlFor="name" className="grid grid-cols-1">
          <span className="text-xl font-semibold">Name</span>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-green/80 rounded-lg py-3 px-4 pr-8 shadow-md shadow-orange-900"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phonenumber" className="grid grid-cols-1">
          <span className="text-xl font-semibold">Phone Number</span>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="bg-green/80 rounded-lg py-3 px-4 pr-8 shadow-md shadow-orange-900"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email" className="grid grid-cols-1">
          <span className="text-xl font-semibold">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-green/80 rounded-lg py-3 px-4 pr-8 shadow-md shadow-orange-900"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="message" className="col-span-3 grid grid-cols-1">
          <span className="text-xl font-semibold">Message</span>
          <textarea
            name="message"
            id="message"
            className="bg-green/80 rounded-lg py-3 px-4 pr-8 shadow-md shadow-orange-900"
            value={formData.message}
            onChange={handleTextareaChange}
          />
        </label>

        <div className="col-span-3 flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="cursor-pointer bg-green shadow-lg shadow-orange-800 px-5 py-2 w-fit rounded-lg "
          />
        </div>
      </form>
    </div>
  );
};

export default page;