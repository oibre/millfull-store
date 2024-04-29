import Link from "next/link";
import Image from "next/image";
import linkedinlogo from "../../linkedin.png";
import instagramlogo from "../../instagram.jpeg";
import whatsapplogo from "../../whatsapp.jpeg";
import maillogo from "../../mail.png";
import { executeGraphQL } from "@/lib/graphql";
import { MenuGetBySlugDocument } from "@/gql/graphql";
export async function Footer() {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer" },
		revalidate: 60 * 60 * 24,
	});
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-neutral-300 bg-neutral-50">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="grid grid-cols-3 gap-8 py-16">
					{footerLinks.menu?.items?.map((item) => {
						return (
							<div key={item.id}>
								<h3 className="text-sm font-semibold text-neutral-900">{item.name}</h3>
								<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
									{item.children?.map((child) => {
										if (child.category) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={`/categories/${child.category.slug}`}>{child.category.name}</Link>
												</li>
											);
										}
										if (child.collection) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={`/collections/${child.collection.slug}`}>{child.collection.name}</Link>
												</li>
											);
										}
										if (child.page) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={`/pages/${child.page.slug}`}>{child.page.title}</Link>
												</li>
											);
										}
										if (child.url) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={child.url}>{child.name}</Link>
												</li>
											);
										}
										return null;
									})}
								</ul>
							</div>
						);
					})}
					<div>
						<h3 className="text-sm font-semibold text-neutral-900">Contact</h3>
						<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
							<li className="text-sm">
								<div className="card-body mt-5 flex text-2xl">
									<span>
										<Image src={whatsapplogo} alt="WhatsApp" width={32} height={32} />
									</span>
									<a href="https://wa.me/917730900909" className="text-sky">
										{" "}
										+91 - 7730900909
									</a>
									<br />
								</div>
								<div className="card-body mt-5 flex text-2xl">
									<span>
										<Image src={maillogo} alt="Mail" width={32} height={32} />
									</span>
									<a href="mailto:info@millfull.in"> info@millfull.in</a>
								</div>
								<div className="card-body mt-5 flex items-center text-2xl">
									<Image src={linkedinlogo} alt="LinkedIn" width={32} height={32} />
									<a href="https://www.linkedin.com/company/millfull/" className="text-sky">
										Millfull
									</a>
									<br />
								</div>
								<div className="card-body mt-5 flex items-center text-2xl">
									<Image src={instagramlogo} alt="Instagram" width={32} height={32} />
									<a href="https://www.instagram.com/millfull.in/" className="mr-2">
										millfull.in
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
					<p className="text-sm text-neutral-500">Copyright &copy; {currentYear} Millfull, Inc.</p>
					<p className="text-sm text-neutral-500">Powered by Saleor</p>
				</div>
			</div>
		</footer>
	);
}
