"use client";
import React from "react";
import { faUser, faGear } from "@fortawesome/free-solid-svg-icons";

//estado para facilitar navegacion
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useArtistContext } from "../provider/artistProvider";

const ArtistCard = ({ item }) => {
	//se crea instancia para navegar
	const route = useRouter();
	const { setArtist } = useArtistContext();
	return (
		<div
			key={item.id}
			className="items-center p-2 m-4 space-y-3 bg-gray-500 border-4 border-sky-700 rounded-lg min-w-[250px]"
		>
			<div className=" flex-row flex">
				<div className="self-center flex flex-col space-y-4 mx-4">
					<FontAwesomeIcon icon={faUser} height={16} width={16} />
					<a
						onClick={() => {
							setArtist(item);
							route.push(`http://localhost:3000/artistlist/${item.id}`);
						}}
					>
						<FontAwesomeIcon icon={faGear} height={16} width={16} />
					</a>
				</div>
				<div>
					<p>
						{item.nombre}, {item.edad}
					</p>
					<p>{item.banda}</p>
					<p>{item.generoMusical}</p>
				</div>
			</div>
		</div>
	);
};

export default ArtistCard;
