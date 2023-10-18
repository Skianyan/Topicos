import React from "react";
import { getDummyProducts } from "@/libs";
import DummyCard from "@/components/DummyCard";

const page = async () => {
	const { products } = await getDummyProducts();
	console.log(products);

	return (
		<div>
			{products.map((item) => (
				<DummyCard item={item} />
			))}
		</div>
	);
};

export default page;
