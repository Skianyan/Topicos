import React from "react";
import { getDummyProducts } from "@/libs";
import DummyCard from "@/components/DummyCard";

const page = async () => {
	//destructurar 'products' del objeto
	const { products } = await getDummyProducts();

	return (
		<div className="flex flex-col sm:flex-row sm:flex-wrap justify-items-center gap-4 mt-4">
			{products.map((item) => (
				<DummyCard item={item} />
			))}
		</div>
	);
};

export default page;
