"use client";

import React, { useState, useEffect } from "react";

const Carousel = ({ slides }: any) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, 3000); // Rotate every 3 seconds

		return () => clearInterval(intervalId); // Cleanup the interval on component unmount
	}, [slides.length]);

	const goToSlide = (index: any) => {
		setCurrentSlide(index);
	};

	return (
		<div className="relative flex flex-col items-center justify-center">
			{/* <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" onClick={goToPrevSlide}>Prev</button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" onClick={goToNextSlide}>Next</button> */}
			<div className="relative h-64 w-4/5 max-w-screen-md overflow-hidden">
				{slides.map((slide: any, index: any) => (
					<div
						key={index}
						className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-500 ${
							index === currentSlide ? "opacity-100" : "opacity-0"
						}`}
					>
						{slide}
					</div>
				))}
			</div>
			<div className="mt-4 flex">
				{slides.map((_: any, index: any) => (
					<button
						key={index}
						className={`mx-1 h-3 w-3 rounded-full bg-gray-400 ${index === currentSlide ? "bg-gray-800" : ""}`}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
