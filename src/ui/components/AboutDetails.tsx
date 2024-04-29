"use client";
import React from "react";

interface AboutDetailsProps {
	title: string;
	description: string;
}

const AboutDetails: React.FC<AboutDetailsProps> = ({ title, description }) => {
	const textStyle = {
		fontFamily: "brownRegular", // Assuming 'brownRegular' is the font family name
		color: "#1b2211",
		fontSize: "1.5rem", // Adjust font size as needed
		marginTop: "1rem", // Adjust margin top as needed
	};

	return (
		<div className="container text-center">
			<h2 style={{ ...textStyle, fontSize: "3rem" }}>{title}</h2>
			<p style={textStyle}>{description}</p>
		</div>
	);
};
export default AboutDetails;
