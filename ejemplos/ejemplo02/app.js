const button = document.getElementById("login");
const p1 = document.createElement("p");
document.body.appendChild(p1); //change this to end of every if parameter to add one every click

function handleEvent(e) {
	e.preventDefault();
	const userName = document.getElementById("name").value;
	const userPass = document.getElementById("pass").value;

	if (userName === "" || userPass === "") {
		p1.innerHTML = `Los campos no pueden estar vacios`;
	} else if (userPass.length <= 5) {
		p1.innerHTML = `La contraseña tiene que tener mas de 5 digitos`;
	} else {
		p1.innerHTML = `Usuario: ${userName}, Contraseña: ${userPass}`;
	}
}

button.addEventListener("click", handleEvent, false);

//agregar, validaciones, si esta vacio mandar texto de rechazo
//contraseña mayor a 5 digitos
