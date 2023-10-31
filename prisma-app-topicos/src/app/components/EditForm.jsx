"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useArtistContext } from "../provider/artistProvider";

const EditForm = ({ artist }) => {
	const [nombre, setNombre] = useState("");
	const [edad, setEdad] = useState("");
	const [banda, setBanda] = useState("");
	const [generoMusical, setGeneroMusical] = useState("");

	const [error, setError] = useState("");
	const router = useRouter();
	const { artist } = useArtistContext();

	useEffect(() => {
		if ((artist /= null)) {
			setNombre = artist.nombre;
			setEdad = artist.edad;
			setBanda = artist.banda;
			setGeneroMusical = artist.generoMusical;
		}
	}, [artist]);

	const submitData = async (e) => {
		e.preventDefault();
		try {
			const body = { nombre, edad, banda, generoMusical };
			console.log(body);
			await fetch(`/api/artistas/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});

			router.push("/");
		} catch (error) {
			console.error(error);
		}
	};

	const clear = () => {
		setNombre("");
		setEdad("");
		setBanda("");
		setGeneroMusical("");
	};

	const delet = async () => {
		const { id } = artist;
		await fetch(`/api/artistas/${id}`, {
			method: "DELETE",
		});
		router.push("/artistlist");
	};

	return (
		<>
			<form className="bg-[#25477b] space-y-2 border-4 border-sky-600 p-4 rounded-md">
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="nombre"
						className="font font-semibold uppercase text-white"
					>
						name
					</label>
					<input
						type="text"
						id="nombre"
						className="p-2 rounded-md"
						placeholder="Artist name"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="edad"
						className="font font-semibold uppercase text-white"
					>
						age
					</label>
					<input
						type="text"
						id="edad"
						className="p-2 rounded-md"
						placeholder="Artist age"
						value={edad}
						onChange={(e) => setEdad(e.target.value)}
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="banda"
						className="font font-semibold uppercase text-white"
					>
						band
					</label>
					<input
						type="text"
						id="banda"
						className="p-2 rounded-md"
						placeholder="Name of band"
						value={banda}
						onChange={(e) => setBanda(e.target.value)}
					/>
				</div>

				<div className="flex flex-col space-y-1">
					<label
						htmlFor="generoMusical"
						className="font font-semibold uppercase text-white"
					>
						genre
					</label>
					<input
						type="text"
						id="generoMusical"
						className="p-2 rounded-md"
						placeholder="Band genre"
						value={generoMusical}
						onChange={(e) => setGeneroMusical(e.target.value)}
					/>
				</div>
				<div>
					<button
						className="bg-[#1b2444] rounded-md p-3 mt-4 text-white"
						onClick={submitData}
					>
						Save Changes
					</button>
				</div>
				<div className="flex flex-row w-full justify-end space-x-4 ">
					<div className="flex justify-end">
						<input
							type="button"
							value={"Delete"}
							className="bg-red-500 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
							onClick={delet}
						/>
					</div>
					<div className="flex justify-end">
						<input
							type="button"
							value={"Clear"}
							className="bg-emerald-300 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
							onClick={clear}
						/>
					</div>
				</div>
			</form>
		</>
	);
};

export default EditForm;
