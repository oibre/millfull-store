import { notFound } from "next/navigation";
import { ProductListPaginatedDocument } from "@/gql/graphql";
import { ProductsPerPage, executeGraphQL } from "@/lib/graphql";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
	title: "Products · Millets to the fullest",
	description: "Your go-to brand for wholesome snacking! Indulge in our range of baked snacks, instant millet mixes, delicious millet-based cookies and savories. Elevate your snacking experience with nutritious goodness in every bite!",
};

type Props = {
	searchParams: {
		cursor: string;
	};
};

export default async function Page({ searchParams }: Props) {
	const { cursor } = searchParams;

	const { products } = await executeGraphQL(ProductListPaginatedDocument, {
		variables: {
			first: ProductsPerPage,
			after: cursor,
		},
		revalidate: 60,
	});

	if (!products) {
		notFound();
	}

	return (
		<div>
			<section className="mx-auto max-w-7xl p-8 pb-16">
				<h2 className="sr-only">Product list</h2>
				<ProductList products={products.edges.map((e) => e.node)} />
				<Pagination pageInfo={products.pageInfo} />
			</section>
		</div>
	);
}
