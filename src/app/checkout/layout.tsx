import { type ReactNode } from "react";

export const metadata = {
	title: "Millfull - Millets to the fullest",
	description: "Millets to the fullest",
};

export default function RootLayout(props: { children: ReactNode }) {
	return <main>{props.children}</main>;
}
