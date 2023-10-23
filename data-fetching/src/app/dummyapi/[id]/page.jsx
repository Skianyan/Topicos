"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { calcDiscount } from "@/libs/simpleFunctions";

async function obtainDummyData(id) {
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	if (!response.ok) throw new Error("No se pudo obtener");
	return response.json();
}

const page = async ({ params }) => {
	const { id } = params;
	const data = await obtainDummyData(id);
	for (let img of data.images) {
		console.log(img);
	}
	return (
		<div
			key={data.id}
			className="flex flex-col sm:flex-row px-20 items-center border-b w-full border-b-blue-950 min-h-[76vh]"
		>
			<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
				<div className="-m-1 flex flex-wrap md:-m-2">
					{data.images.map((item) => (
						<Image
							src={item}
							alt="gallery"
							height={0}
							width={0}
							sizes="10vw"
							style={{ width: "auto", height: "160px" }}
						/>
					))}
				</div>
			</div>
			<div className="space-y-2 w-[50%]">
				<p className="text-lg font">{data.title}</p>
				<p>
					Brand:{" "}
					<a className="italic" href="./">
						{data.brand}
					</a>
				</p>
				<div className="flex items-center space-x-1">
					<FontAwesomeIcon
						icon={faStar}
						height={20}
						width={20}
						style={{ color: "#d9d217" }}
					/>
					<p>{data.rating} Stars •</p>
					<p className="italic">{data.stock} in stock</p>
				</div>
				<div className="flex space-x-4">
					<p className="text-2xl text-red-500">-{data.discountPercentage}%</p>
					<p className="text-2xl ">
						${calcDiscount(data.price, data.discountPercentage).toFixed(2)}
					</p>
				</div>
				<div>
					<p className="text-sm text-gray-500">original price: ${data.price}</p>
				</div>
				<ul>
					<li>{data.description}</li>
				</ul>
				<button className="bg-yellow-200 p-2 px-14 rounded-md border-yellow-700 border text-yellow-900">
					Buying options
				</button>
				<p>
					tags:{" "}
					<a className="italic" href="./">
						{data.category}
					</a>
				</p>
			</div>
		</div>
	);
};

export default page;

// import React from "react";

// async function obtainDummyData(id) {
// 	const response = await fetch(`http://localhost:3000/dummyapi/${id}`);
// 	if (!response.ok) throw new Error("No se pudo obtener");
// 	return response.json();
// }

// const page = async ({ params }) => {
// 	const { id } = params.id;
// 	const data = await obtainDummyData(id);
// 	return (
// 		<div>
// 			<div>{data}</div>
// 		</div>
// 	);
// };

// export default page;
