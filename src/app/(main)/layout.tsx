import { type ReactNode } from "react";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";
import Carousel from "@/ui/components/Carousel";

export const metadata = {
	title: "MillFull",
	description: "Millets to the fullest",
};


export default function RootLayout(props: { children: ReactNode }) {



  const slides = [
    <img src="https://plus.unsplash.com/premium_photo-1663933534267-fe6969cd26e1?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" className="w-screen h-full object-cover" />,
    <img src="https://plus.unsplash.com/premium_photo-1663933534569-91301eaf3c1d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" className="w-screen h-full object-cover" />,
    <img src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" className="w-screen h-full object-cover" />,
  ];

	return (
		<>
			<Header />
      {/* banner */}

      <Carousel slides={slides} />

			<div className="flex min-h-[calc(100dvh-64px)] flex-col">
				<main className="flex-1">{props.children}</main>
				<Footer />
			</div>
		</>
	);
}
