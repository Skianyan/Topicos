"use client";
import Form from "./components/Form";
import React, { useState } from "react";

export default function Home() {
	const [resultado, setResultado] = useState("Sin resultado");
	useState("");

	const [error, setError] = useState("");

	return (
		<main className="flex flex-col items-center space-y-5">
			<section>
				<h1 className="text-3xl text-bold mt-10">Indice de Masa Corporal</h1>
			</section>
			<section className="w-[80vw]">
				<Form
					resultado={resultado}
					setResultado={setResultado}
					setError={setError}
				/>
			</section>

			{resultado && (
				<section
					className="text-2xl 
            font-bold p-3 
           bg-purple-300 
            rounded-md  ">
					{resultado}
				</section>
			)}
		</main>
	);
}
