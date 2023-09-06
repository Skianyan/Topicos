const estudiantes = ["Ricardo", "Julio", "Daniela", "Arlette"];

const titulo = document.createElement('h1');
titulo.innerHTML = 'FUNCIONES';

const borrar = document.createElement('h1');
borrar.innerHTML = 'BORRAR ESTUDIANTES';

document.body.appendChild(titulo);
document.body.appendChild(borrar);

titulo.addEventListener('click', () => {
  for (let estudiante of estudiantes) {
    const p = document.createElement('p');
    p.setAttribute("class","parrafo")
    p.innerHTML = estudiante;
    document.body.appendChild(p);
  }
});

borrar.addEventListener('click', () => {
  const p = document.getElementsByClassName("parrafo");
  while(p.length > 0){
    p[0].parentNode.removeChild(p[0]);
  }
});
