"use server";
import { revalidatePath } from "next/cache";
import { executeGraphQL } from "@/lib/graphql";
import {
	CheckoutAddLineDocument,
	CheckoutDeleteLinesDocument,
	CheckoutLinesUpdateDocument,
} from "@/gql/graphql";

type DeleteLineFromCheckoutArgs = {
	lineId: string;
	checkoutId: string;
};

export const deleteLineFromCheckout = async ({ lineId, checkoutId }: DeleteLineFromCheckoutArgs) => {
	await executeGraphQL(CheckoutDeleteLinesDocument, {
		variables: {
			checkoutId,
			lineIds: lineId,
		},
		cache: "no-cache",
	});

	revalidatePath("/cart");
};
type UpdateLineFromCheckoutArgs = {
	lineId: string;
	checkoutId: string;
	quantity: number;
};

export const updateLineFromCheckout = async ({
	lineId,
	checkoutId,
	quantity,
}: UpdateLineFromCheckoutArgs) => {
	await executeGraphQL(CheckoutLinesUpdateDocument, {
		variables: {
			checkoutId,
			lines: [
				{
					lineId,
					quantity,
				},
			],
		},
		cache: "no-cache",
	});

	revalidatePath("/cart");
};

type AddLineToCheckoutArgs = {
	variantId: string;
	checkoutId: string;
};

export const addLineToCheckout = async ({ variantId, checkoutId }: AddLineToCheckoutArgs) => {
	await executeGraphQL(CheckoutAddLineDocument, {
		variables: {
			id: checkoutId, // Fix variable name to match the GraphQL mutation
			productVariantId: variantId, // Update variable name to match the GraphQL mutation
		},
		cache: "no-cache",
	});

	revalidatePath("/cart");
};
