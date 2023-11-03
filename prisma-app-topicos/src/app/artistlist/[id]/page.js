import React from "react";

import { Exo_2 } from "next/font/google";
import { prisma } from "@/app/libs/prisma";
import Formulario from "@/app/components/Formulario";

const exo2 = Exo_2({ subsets: ["latin"] });

const page = async ({ params }) => {
	const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
	const artist = await prisma.artista.findUnique({
		where: { id },
	});
	if (!artist);
	return (
		<div className="bg-[#020f23] min-h-[65vh] pb-10">
			<div className={exo2.className}>
				<div className="flex flex-col w-full items-center">
					<div className="p-4 text-center text-white">Artist edit page</div>
					<div className="m-4 w-[95%] sm:w-[90%] max-w-[900px]">
						<Formulario artist={artist} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
