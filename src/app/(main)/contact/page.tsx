import { type NextPage } from "next";
import Image from "next/image";
import linkedinlogo from "../../../linkedin.png";
import instagramlogo from "../../../instagram.jpeg";
import whatsapplogo from "../../../whatsapp.jpeg";
import maillogo from "../../../mail.png";
import logo from "../../../logorotate.gif";
import ContactUs from "@/ui/components/ContactUs";

interface Metadata {
	title: string;
	description: string;
}

const metadata: Metadata = {
	title: "Products · Millets to the fullest",
	description:
		"Your go-to brand for wholesome snacking! Indulge in our range of baked snacks, instant millet mixes, delicious millet-based cookies and savories. Elevate your snacking experience with nutritious goodness in every bite!",
};

const Page: NextPage = () => {
	return (
		<div className="flex flex-col lg:flex-row">
			<section className="card mx-auto mt-8 max-w-lg border-2 p-8 p-8 pb-16 lg:w-1/2">
				<div className="card">
					<div className="card-title text-5xl">Get in touch</div>
					<div className="card-body mt-5 flex text-2xl">
						<span>
							<Image src={whatsapplogo} alt="WhatsApp Logo" width={32} height={32} />
						</span>
						<a href="https://wa.me/917730900909" className="text-sky">
							{" "}
							+91 - 7730900909
						</a>
						<br />
					</div>
					<div className="card-body mt-5 flex items-center text-2xl">
						<span>
							<Image src={maillogo} alt="Mail Logo" width={32} height={32} />
						</span>
						<a href="mailto:info@millfull.in"> info@millfull.in</a>
					</div>
					<div className="card-body mt-5 flex items-center text-2xl">
						<Image src={linkedinlogo} alt="LinkedIn Logo" width={32} height={32} />
						<a href="https://www.linkedin.com/company/millfull/" className="text-sky">
							Millfull
						</a>
						<br />
					</div>
					<div className="card-body mt-5 flex items-center text-2xl">
						<Image src={instagramlogo} alt="Instagram Logo" width={32} height={32} />
						<a href="https://www.instagram.com/millfull.in/" className="mr-2">
							millfull.in
						</a>
					</div>
				</div>
				<ContactUs />
			</section>
			<section className="mx-auto mt-8 max-w-lg p-8 pb-16 lg:w-1/2">
				<div className="card">
					{/* <ImageCarousel /> Assuming this is your image carousel component */}
					<Image src={logo} alt="Slide 1" className="h-full w-screen object-cover" />
				</div>
			</section>
		</div>
	);
};

export default Page;
export { metadata };
