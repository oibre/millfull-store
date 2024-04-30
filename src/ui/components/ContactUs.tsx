"use client";

import React, { useState, type FormEvent, type ChangeEvent } from "react";

const ContactUs = () => {
	// Define state variables for form fields
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	// Handle form submission
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// You can handle form submission logic here, such as sending the form data to a server
		console.log("Form submitted:", { name, email, message });
		// Clear form fields after submission
		setName("");
		setEmail("");
		setMessage("");
	};

	// Handle input change
	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		switch (name) {
			case "name":
				setName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "message":
				setMessage(value);
				break;
			default:
				break;
		}
	};

	return (
		<form onSubmit={handleSubmit} className="card mx-auto mt-8 max-w-md border-2 p-8">
			<div className="">
				<h1 className="text-3xl decoration-[#1B2211] decoration-solid">Write To Us</h1>
			</div>
			<div className="mb-4">
				<label htmlFor="name" className="mb-1 block font-medium text-gray-800">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleInputChange}
					required
					className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="email" className="mb-1 block font-medium text-gray-800">
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleInputChange}
					required
					className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="message" className="mb-1 block font-medium text-gray-800">
					Message
				</label>
				<textarea
					id="message"
					name="message"
					value={message}
					onChange={handleInputChange}
					required
					rows={4}
					className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
				></textarea>
			</div>
			<button
				type="submit"
				className="hover:bg-[#1B2211]-600 w-full rounded bg-[#1B2211] px-4 py-2 font-bold text-white focus:bg-blue-600 focus:outline-none"
			>
				Subscribe
			</button>
		</form>
	);
};
export default ContactUs;
