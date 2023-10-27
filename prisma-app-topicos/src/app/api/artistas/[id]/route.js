import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
//Endpoint for a single artist

//Returns a single artist
// http://localhost:3000/api/artistas/{id}
export async function GET(request, { params: { id } }) {
	try {
		const artista = await prisma.artista.findFirst({
			where: {
				id: Number(id),
			},
		});
		if (!artista) {
			return NextResponse.json(
				{ error: "Artista no encontrado" },
				{ status: 404 }
			);
		}
		return NextResponse.json(artista);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json(
				{
					error: error.message,
				},
				{}
			);
		}
	}
}

export async function DELETE(request, { params: { id } }) {
	try {
		const artista = await prisma.artista.delete({
			where: {
				id: Number(id),
			},
		});
		if (!artista) {
			return NextResponse.json(
				{ error: "Artista no encontrado" },
				{ status: 404 }
			);
		}
		return NextResponse.json(artista);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}
}

export async function PUT(request, { params: { id } }) {
	const { nombre, edad, banda, generoMusical } = await request.json();

	try {
		const nuevoArtista = await prisma.artista.update({
			where: {
				id: Number(id),
			},
			data: {
				nombre: nombre,
				edad: edad,
				banda: banda,
				generoMusical: generoMusical,
			},
		});
		if (!artista) {
			return NextResponse.json(
				{ error: "Artista no encontrado" },
				{ status: 404 }
			);
		}
		return NextResponse.json(nuevoArtista);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json(
				{
					error: error.message,
				},
				{}
			);
		}
	}
}
