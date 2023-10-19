export function calcDiscount(price, discount) {
	let res = price - (price * discount) / 100;
	return res;
}
