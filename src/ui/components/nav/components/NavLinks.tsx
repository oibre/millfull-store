import { NavLink } from "./NavLink";
// import { executeGraphQL } from "@/lib/graphql";
// import { MenuGetBySlugDocument } from "@/gql/graphql";

export const NavLinks = async () => {
	// const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
	// 	variables: { slug: "navbar" },
// 	revalidate: 60 * 60 * 24,
	// });

	return (
		<>
			<NavLink href="/products">Shop All</NavLink>
      <NavLink href={`/combos`}>
        Combos
      </NavLink>
      <NavLink href={`/about`}>
        About Us
      </NavLink>
      <NavLink href={`/facts`}>
        Fact Store
      </NavLink>
      <NavLink href={`/contact`}>
        Contact Us
      </NavLink>

			{/* {navLinks.menu?.items?.map((item) => {
				if (item.category) {
					return (
						<NavLink key={item.id} href={`/categories/${item.category.slug}`}>
							{item.category.name}
						</NavLink>
					);
				}
				if (item.collection) {
					return (
						<NavLink key={item.id} href={`/collections/${item.collection.slug}`}>
							{item.collection.name}
						</NavLink>
					);
				}
				if (item.page) {
					return (
						<NavLink key={item.id} href={`/pages/${item.page.slug}`}>
							{item.page.title}
						</NavLink>
					);
				}
				if (item.url) {
					return (
						<Link key={item.id} href={item.url}>
							{item.name}
						</Link>
					);
				}
				return null;
			})} */}
		</>
	);
};
