import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";

export function Header() {
	return (
		<header className="sticky top-0 z-20 m-0 flex h-[auto] flex-col items-center justify-center bg-[#1B2211] py-[20px] backdrop-blur-md">
			<div className="flex w-full max-w-7xl  items-center justify-between px-3 sm:px-8">
				<Logo />
				<Nav />
			</div>
		</header>
	);
}
