const boton = document.getElementsByTagName("button");

console.log(boton[0]);

function handleEvent(e) {
	e.preventDefault();
	const p1 = document.createElement("p");
	p1.innerHTML = `${Math.random()}`;
	document.body.appendChild(p1);
}

boton[0].addEventListener("click", handleEvent, false);
