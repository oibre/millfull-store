"use client";
import logo from "../../log1.png";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
				<Image src={logo} className="h-[145px] w-[135px]" alt="" />
			</h1>
		);
	}
	return (
		<div className="flex items-center font-bold">
			<Link aria-label="homepage" href="/">
				<Image src={logo} className="h-[145px] w-[135px]" alt="" />
			</Link>
		</div>
	);
};
