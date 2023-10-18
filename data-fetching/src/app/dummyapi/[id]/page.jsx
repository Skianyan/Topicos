import React from "react";
async function obtainDummyData(id) {
	const response = await fetch(`https://localhost:3000/dummyapi/${id}`);
	if (!response.ok) throw new Error("No se pudo obtener");
	return response.json();
}
const page = async ({ params }) => {
	//const { id } = params;
	//const data = await obtainDummyData(id);
	return <div>HELP ME!</div>;
};

export default page;
