import React from "react";
import Formulario from "../components/Formulario";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"] });

const page = () => {
	return (
		<div className="bg-[#020f23] min-h-[65vh] ">
			<div className={exo2.className}>
				<div className="flex flex-col w-full items-center">
					<div className="p-4 text-center text-white">Add artist page</div>
					<div className="m-4 w-[95%] sm:w-[90%] max-w-[900px]">
						<Formulario />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
