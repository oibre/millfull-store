// import logo from "../../../logo1.png"
import AboutDetails from "@/ui/components/AboutDetails";

// import ImageCarousel from "@/ui/components/ImageCarousel"; // Assuming ImageCarousel is the component for your image carousel

export const metadata = {
	title: "Products · Millets to the fullest",
	description:
		"Your go-to brand for wholesome snacking! Indulge in our range of baked snacks, instant millet mixes, delicious millet-based cookies and savories. Elevate your snacking experience with nutritious goodness in every bite!",
};

export default async function Page() {
	// console.log(logo)
	// const watermarkStyle = {
	//     backgroundImage: `url(${logo.src})`,
	//     backgroundRepeat: 'no-repeat',
	//     backgroundPosition: 'center',
	//     backgroundOpacity: 1, // Adjust the opacity of the watermark as needed
	//     position: "fixed",
	//     width: "100%",
	//     height: "100%",
	//     top: 0,
	//     left: 0,
	//     zIndex: -1,
	//     display:"none"
	//     // Add other background styles here if necessary
	// };

	return (
		<div>
			{/* <div style={watermarkStyle}></div> */}
			<section className="mx-auto max-w-7xl p-8 pb-16">
				<AboutDetails
					title="About Us"
					description="Welcome to Millfull, where we're on a mission to revolutionize the way you incorporate millets into your daily diet! At Millfull, we believe that healthy eating should never compromise on taste, and that's why we've crafted a range of delicious, value-added products that make it easy and enjoyable to enjoy the nutritional benefits of millets."
				/>
				<AboutDetails
					title=""
					description="Millets have been a staple in traditional diets across the India for centuries, prized for their nutritional richness and resilience to grow in diverse climates. However, despite their remarkable health benefits, millets have often been overlooked in modern diets due to lack of awareness and limited availability of convenient, tasty options."
				/>
				<AboutDetails
					title=""
					description="That's where Millfull comes in. We're passionate about unlocking the full potential of millets by transforming them into mouthwatering snacks and pantry essentials that you'll love to incorporate into your daily routine. From crispy jowar curls to wholesome instant millet mix, each Millfull product is thoughtfully crafted to deliver not only exceptional taste but also a powerful nutritional punch."
				/>

				<AboutDetails
					title=""
					description="Our journey began with a simple yet ambitious goal: to make millets a mainstream part of every kitchen. We've worked tirelessly to source the finest quality millets and collaborate with expert chefs to develop recipes that celebrate the unique flavors and textures of these ancient grains."
				/>
				<AboutDetails
					title=""
					description="But our commitment doesn't stop there. At Millfull, sustainability and social responsibility are at the core of everything we do. We partner with local farmers to promote sustainable farming practices and support rural communities, ensuring that our products not only nourish your body but also contribute to a more sustainable food system."
				/>
				<AboutDetails
					title=""
					description="Whether you're looking for a nutritious snack on-the-go or seeking to add wholesome ingredients to your favorite recipes, Millfull is here to inspire and empower you on your journey to healthier eating. Join us in embracing the millet revolution and discover the delicious possibilities that await with Millfull."
				/>
				<AboutDetails
					title=""
					description="Our goal is to take Millfull to every nook and corner of India and make it nutrition rich India,"
				/>

				<h1 className="text-center text-[30px]">“ Poshan Se Bharpoor Bharat ”</h1>
			</section>
		</div>
	);
}
