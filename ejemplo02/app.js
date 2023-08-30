const button = document.getElementById('validar');

function handleEvent(e) {
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const userPass = document.getElementById('pass').value;

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  p1.innerHTML = `Nombre de usuario: ${userName}`;
  p2.innerHTML = `Contraseña de usuario: ${userPass}`;
  document.body.appendChild(p1);
  document.body.appendChild(p2);
}

button.addEventListener('click', handleEvent, false);

//agregar, validaciones, si esta vacio mandar texto de rechazo
//contraseña mayor a 5 digitos