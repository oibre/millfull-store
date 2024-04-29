"use client";
import React, { useState , useTransition } from "react";
import { addLineToCheckout, updateLineFromCheckout } from "./actions";

type Props = {
	lineId: string;
	checkoutId: string;
	quantity: number;
	variantId: string;
};

export const QuantityControl = ({ lineId, checkoutId, quantity, variantId }: Props) => {
	const [isPending, startTransition] = useTransition();
	const [quantitys, setQuantity] = useState(quantity);

	const handleAdd = () => {
		if (isPending) return;
		startTransition(() => addLineToCheckout({ variantId, checkoutId }));
		setQuantity(quantitys + 1);
	};

	const handleRemove = () => {
		if (isPending) return;
		setQuantity(quantitys - 1);
		startTransition(() => updateLineFromCheckout({ lineId, checkoutId, quantity: quantitys }));
	};

	return (
		<div className="flex items-center">
			<button
				type="button"
				onClick={handleRemove}
				disabled={isPending}
				className="rounded-md bg-gray-200 px-2 py-1 text-sm text-neutral-500 hover:bg-gray-300 hover:text-neutral-900"
			>
				-
			</button>
			<span className="mx-2">{quantity}</span>
			<button
				type="button"
				onClick={handleAdd}
				disabled={isPending}
				className="rounded-md bg-gray-200 px-2 py-1 text-sm text-neutral-500 hover:bg-gray-300 hover:text-neutral-900"
			>
				+
			</button>
			<span className="sr-only">Quantity control</span>
		</div>
	);
};
