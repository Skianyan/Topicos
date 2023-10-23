import React from "react";
import Card from "@/components/Card";

import { getProducts } from "@/libs";

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
