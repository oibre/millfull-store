import { Suspense } from "react";
// import { UserMenu } from "./components/UserMenu/UserMenu";
import { CartNavItem } from "./components/CartNavItem";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";

export const Nav = () => {
	return (
		<nav className="flex w-full gap-4 bg-[#1B2211] lg:gap-6" aria-label="Main navigation">
			<ul className="flex hidden items-center justify-center gap-4 overflow-x-auto whitespace-nowrap md:ml-0 md:flex lg:ml-[300px] lg:gap-8 lg:px-0">
				<NavLinks />
			</ul>

			<div className="flex items-center">
				<Suspense fallback={<div className="w-6" />}>
					<CartNavItem />
				</Suspense>
			</div>
			<Suspense>
				<MobileMenu>
					<NavLinks />
				</MobileMenu>
			</Suspense>
		</nav>
	);
};
