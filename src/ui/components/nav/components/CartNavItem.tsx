import { cookies } from "next/headers";
import Link from "next/link";
import clsx from "clsx";
import * as Checkout from "@/lib/checkout";

export const CartNavItem = async () => {
	const checkoutId = cookies().get("checkoutId")?.value;
	const checkout = checkoutId ? await Checkout.find(checkoutId) : null;

	const lineCount = checkout ? checkout.lines.reduce((result, line) => result + line.quantity, 0) : 0;

	return (
		<Link href="/cart" className="relative flex items-center bg-[#1B2211]" data-testid="CartNavItem">
			{/* <ShoppingBagIcon className="h-6 w-6 shrink-0 text-white" aria-hidden="true" /> */}
      <p className="text-md text-white font-regular">Cart</p>
			{lineCount > 0 ? (
				<div
					className={clsx(
						"absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 flex-col items-center justify-center rounded bg-neutral-900 text-xs font-medium text-white",
						lineCount > 9 ? "w-[3ch]" : "w-[2ch]",
					)}
				>
					{lineCount} <span className="sr-only">item{lineCount > 1 ? "s" : ""} in cart, view bag</span>
				</div>
			) : (
				<span className="sr-only">0 items in cart</span>
			)}
		</Link>
	);
};
