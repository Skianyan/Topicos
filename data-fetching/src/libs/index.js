export async function getDummyProducts(){
	const response = await fetch("https://dummyjson.com/products");
	return response.json();
}

export async function getProducts() {
	const response = await fetch("https://fakestoreapi.com/products");
	return response.json();
}

