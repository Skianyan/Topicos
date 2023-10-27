export async function getArtists() {
	const response = await fetch("./api/route.js");
	return response.json();
}
