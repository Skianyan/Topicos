import React from "react";
import Image from "next/image";

async function getProducts() {
	const response = await fetch("https://fakestoreapi.com/products");
	return response.json();
}

const page = async () => {
	const data = await getProducts();

	return (
		<div>
			<h1>Tienda</h1>
			{data.map((items) => (
				<div key={items.id} className="flex">
					<p>{items.title}</p>
					<p>{items.price}</p>
					<p>{items.description}</p>
					<Image src={items.image} alt="hola" width={200} height={200} />
				</div>
			))}
		</div>
	);
};

export default page;
