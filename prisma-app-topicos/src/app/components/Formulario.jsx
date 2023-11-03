"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useArtistContext } from "../provider/artistProvider";
const Formulario = () => {
	const [nombre, setNombre] = useState("");
	const [edad, setEdad] = useState("");
	const [banda, setBanda] = useState("");
	const [generoMusical, setGeneroMusical] = useState("");

	const [error, setError] = useState(false);

	const { artist, setArtist } = useArtistContext();
	const router = useRouter();
	console.log(artist);
	useEffect(() => {
		if (artist !== null) {
			setNombre(artist.nombre);
			setEdad(artist.edad);
			setBanda(artist.banda);
			setGeneroMusical(artist.generoMusical);
		}
	}, [artist]);

	const submitData = async (e) => {
		e.preventDefault();

		if ([nombre, edad, banda, generoMusical].includes("")) {
			setError(true);
			return;
		}
		setError(false);
		// este objeto se crea si el artista está null
		const nuevoArtista = {
			nombre,
			edad,
			banda,
			generoMusical,
		};

		if (artist === null) {
			try {
				const body = { nombre, edad, banda, generoMusical };
				await fetch(`/api/artistas`, {
					cache: "no-store",
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				});
				setArtist(null);
				router.push("/");
			} catch (error) {
				console.error(error);
			}
		} else if (artist !== null) {
			try {
				const body = { nombre, edad, banda, generoMusical };

				await fetch(`/api/artistas/${artist.id}`, {
					cache: "no-store",
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				});
				setArtist(null);
				router.push("/");
			} catch (error) {
				console.error(error);
			}
		}
	};

	const delet = async () => {
		const { id } = artist;
		await fetch(`/api/artistas/${id}`, {
			cache: "no-store",
			method: "DELETE",
		});
		router.push("/");
	};

	const clear = () => {
		setNombre("");
		setEdad("");
		setBanda("");
		setGeneroMusical("");
	};
	return (
		<>
			<form className="bg-[#25477b] space-y-2 border-4 border-sky-600 p-4 rounded-md">
				{error && (
					<div className="bg-red-500 rounded-md font-bold text-center">
						{" "}
						Error: All text fields must contain valid information
					</div>
				)}
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
						{!artist ? "Register Artist" : "Edit Artist"}
					</button>
				</div>
				<div className="flex w-full justify-end space-x-4">
					<div className="flex justify-end">
						<input
							type="button"
							value={"Delete"}
							className="bg-red-500 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
							onClick={delet}
						/>
					</div>
					<input
						type="button"
						value={"Clear"}
						className="bg-emerald-300 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
						onClick={clear}
					/>
				</div>
			</form>
		</>
	);
};

export default Formulario;
