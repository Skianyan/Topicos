import CustomInput from "./CustomInput"

export default function Formulario(){
    const form = document.createElement('form');
  form.classList = 'formulario';

  const inputs = [
    {
      titleLabel: 'Nombre Paciente',
      placeholderLabel: 'Escribe el nombre del paciente',
      id: 'Name'
    },
    {
      titleLabel: 'Teléfono del Paciente',
      placeholderLabel: 'Teléfono',
      id: 'Phone'
    },
    {
      titleLabel: 'Correo Electrónico',
      placeholderLabel: 'Correo Electrónico',
      id: 'Mail'
    },
    {
      titleLabel: 'Síntomas',
      placeholderLabel: 'Síntomas',
      id: 'Symptoms'
    },
  ];

  inputs.forEach((input) => {
    form.appendChild(CustomInput(input));
  });

  //   inputs.map((input) => {
  //     form.appendChild(CustomInput(input));
  //   });

  const button = document.createElement('button');
  button.classList = 'formButton';
  button.innerHTML = 'enviar'
    // se crea un evento al mouse para obtener los datos del form
  button.addEventListener('click', (e) => {
    e.preventDefault()
    // const inputVals = {Name,Phone,Mail,Symptoms}
    console.log()
  })

  form.appendChild(button);
  return form;

}

// obtener datos, investigar validaciones