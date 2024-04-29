"use client";
import Image from "next/image";

import Link from "next/link";
import logo from "../../logo1.png";

const companyName = "Millfull";

export const Logo = () => {
	return (
		<div className="fixed flex items-center font-bold">
			<Link aria-label="homepage" href="/">
				<Image src={logo} className="ml-[35%] mt-[40px] h-[155px] w-[165px] sm:ml-[70%]" alt={companyName} />
			</Link>
		</div>
	);
};
