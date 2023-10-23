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
			return NextResponse.json({ error: "Artista no encontrado" });
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

export function DELETE(request, { params: { id } }) {
	return NextResponse.json({
		message: `Eliminando los datos del artista (${id})`,
	});
}

export function PUT(request, { params: { id } }) {
	return NextResponse.json({
		message: `Actualizando los datos del artista (${id})`,
	});
}
