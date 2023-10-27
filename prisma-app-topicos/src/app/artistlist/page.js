import React from "react";
import { prisma } from "../libs/prisma";
import ArtistCard from "../components/ArtistCard";
import { Exo_2 } from "next/font/google";

const exo2 = Exo_2({ subsets: ["latin"] });

const page = async () => {
	const artists = await prisma.artista.findMany();
	return (
		<div className="bg-[#020f23]  min-h-[65vh] text-white">
			<div className={exo2.className}>
				<div className="p-4 text-center">Artists archived</div>
				<div className="flex sm:flex-row flex-col justify-center flex-wrap ">
					{artists.map((item) => (
						<ArtistCard key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
