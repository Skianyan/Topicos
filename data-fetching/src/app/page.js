import React from "react";

import Card from "../components/Card";

async function getProducts() {
	const response = await fetch("https://fakestoreapi.com/products");
	return response.json();
}

const page = async () => {
	const data = await getProducts();

	return (
		<div>
			{data.map((items) => (
				<div className="w-[100%]">
					<Card {...items} />
				</div>
			))}
		</div>
	);
};

export default page;
