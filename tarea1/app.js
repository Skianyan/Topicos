const title = document.createElement('h2');
const razon = document.createElement('h4');
const form = document.createElement('input');
form.setAttribute("id", "valor")
const boton = document.createElement('button')
const convert = document.createElement('p')

title.innerHTML = `Convierte Pesos a Dolares `;
razon.innerHTML = `El dolar está a 16.72 pesos`;
form.innerHTML = ``;
boton.innerHTML = `Convertir`;

document.body.appendChild(title);
document.body.appendChild(razon);
document.body.appendChild(form);
document.body.appendChild(boton);

function handleEvent(e){
    e.preventDefault();
    var pesos = document.getElementById('valor').value;
    console.log(pesos)
    pesos = (pesos / 16.72).toFixed(2);
    convert.innerHTML = `${pesos}` + " dolares";
    document.body.appendChild(convert);
}

boton.addEventListener('click', handleEvent, false);