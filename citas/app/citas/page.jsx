import Formulario from "@/components/Formulario";
import React from "react";

const CitasPage = () => {
	return (
		<main className="bg-slate-200 w-full">
			<div >
				<h1 className=" text-center uppercase font-semibold text-2xl mt-10">
					Agendar Cita
				</h1>
				<section className="m-10">
					<Formulario />
				</section>
			</div>
		</main>
	);
};

export default CitasPage;
