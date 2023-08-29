# Práctica 02 - Eventos

## Objetivo

Aprender los fundamentos del DOM [Document Object Model](https://developer.mozilla.org/es/docs/Glossary/DOM) y como usar [eventos](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) en JavaScript.

### Instrucciones

Deberás usar la plantilla HTML sin modificar, agregar tu hoja de estilos llamada `style.css` y estudiar el archivo `app.js` donde se muestra como es que se puede acceder y crear elementos HTML y usarlos.

### Menejo básico del DOM

#### Acceder a un elemento HTML

`index.html`
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos</title>
</head>
<body>
    <h1 id="titulo">Eventos</h1>    
</body>
</html>
~~~

`app.js`
~~~
const h1 = document.getElementById('titulo')
~~~

Cuando le agregas la etiqueta `value` obtienes el contenido que hay en `h1` del archivo `index.html` y lo puedes agregar a cualquier variable en JavaScript para poderlo usar
~~~
const h1 = document.getElementById('titulo').value
console.log(h1) // Eventos
~~~
#### Crear un elemento desde JavaScript y mostrarlo en la página HTML

`index.html`
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos</title>
</head>
<body>
    
</body>
</html>
~~~

`app.js`
~~~
const titulo = document.createElement('h1')
titulo.innerHTML = 'Aprendiendo DOM en JavaScript'
document.body.appendChild(titulo)
~~~

#### Agregando un evento

`index.html`
~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos</title>
</head>
<body>
  <h1 id='titulo'>Aprendiendo a poner Evento</h1>
</body>
</html>
~~~

`app.js`
~~~
const titulo = document.getElementById('titulo')
titulo.addEventListener('click',saludar,false)


const saludar() {
  console.log('Hola Mundo')
}
~~~


### Resultado de la práctica

Trata de aplicar estilos para que tu formulario quede parecedi al de la imagen.
<img width="1000" alt="practica02" src="https://github.com/xenyens/topicos-curso/assets/115209684/9e3a6b96-8ed0-4528-b4a7-3950786034a9">

#### Nota
El ejercicio carece de lógica para evitar bugs.
