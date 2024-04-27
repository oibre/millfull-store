import { Inter } from "next/font/google";
import "./globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { AuthProvider } from "@/ui/components/AuthProvider";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Millfull - Millets to the fullest",
	description: "Your go-to brand for wholesome snacking! Indulge in our range of baked snacks, instant millet mixes, delicious millet-based cookies and savories. Elevate your snacking experience with nutritious goodness in every bite!",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en" className="min-h-[100dvh]">
			<body className={`${inter.className} min-h-[100dvh]`}>
				<AuthProvider>{props.children}</AuthProvider>
				<DraftModeNotification />
			</body>
		</html>
	);
}
