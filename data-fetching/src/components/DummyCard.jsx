"use client";
import React from "react";
import Image from "next/image";

//estado para facilitar navegacion
import { useRouter } from "next/navigation";

const DummyCard = ({ item }) => {
	//se crea instancia para navegar
	const router = new useRouter();
	return (
		<div key={item.id}>
			<p>{item.title}</p>
			<Image
				src={item.thumbnail}
				alt="product image"
				height={0}
				width={0}
				sizes="10vw"
				style={{ width: "auto", height: "160px" }}
			/>
			<button
				className="bg-yellow-200 p-2 px-10 rounded-md border-yellow-700 border text-yellow-900 hover:bg-yellow-500 "
				onClick={() => router.push(`http://localhost:3000/dummyapi/${item.id}`)}
			>
				See more
			</button>
		</div>
	);
};

export default DummyCard;
