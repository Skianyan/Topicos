import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

// Creacion de ENDPOINTs

// http://localhost:3000/api/artistas

// Return all artists
export async function GET() {
	try {
		const artistas = await prisma.artista.findMany();
		if (!artistas) {
			return NextResponse.json(
				{ error: "No hay artistas registrados" },
				{ status: 404 }
			);
		}
		return NextResponse.json(artistas);
	} catch (error) {
		if (error) {
			if (error instanceof Error) {
				NextResponse.json({ error: error.stack }, { status: 500 });
			}
		}
	}
}

// Create new artists
export async function POST(request) {
	const { nombre, edad, banda, generoMusical } = await request.json();

	const updateArtista = await prisma.artista.create({
		data: {
			nombre: nombre,
			edad: Number(edad),
			banda: banda,
			generoMusical: generoMusical,
		},
	});

	return NextResponse.json(updateArtista);
}
