import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";

export function Header() {
	return (
		<header className="sticky top-0 z-20 bg-[#1B2211] h-[auto] py-[20px] flex flex-col items-center justify-center backdrop-blur-md">
      <div className="mb-[20px] mt-[-20px]">
        <Logo />
      </div>
			<div className="mx-auto max-w-7xl px-3 sm:px-8">
				<div className="flex h-full justify-between gap-4 md:gap-8">
					<Nav />
				</div>
			</div>
		</header>
	);
}
