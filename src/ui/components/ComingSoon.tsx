import React from "react";

interface Props {
	message?: string;
}

export const ComingSoonXL: React.FC<Props> = ({ message }) => {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<h1 className="mb-8 animate-bounce text-4xl text-5xl font-bold">Coming Soon...</h1>
			{message && <p className="mb-12 text-6xl text-lg text-gray-600">{message}</p>}
			<p className="mb-12 text-4xl text-lg text-gray-600">
				&quot;Brace yourselves for the ultimate surprise!&quot;
			</p>
		</div>
	);
};
