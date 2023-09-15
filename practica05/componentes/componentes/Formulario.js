import CustomInput from "./CustomInput"

export default function Formulario(){
    const form = document.createElement('form');
  form.classList = 'formulario';

  const inputs = [
    {
      titleLabel: 'Nombre Paciente',
      placeholderLabel: 'Escribe el nombre del paciente',
    },
    {
      titleLabel: 'Teléfono del Paciente',
      placeholderLabel: 'Teléfono',
    },
    {
      titleLabel: 'Correo Electrónico',
      placeholderLabel: 'Correo Electrónico',
    },
    {
      titleLabel: 'Síntomas',
      placeholderLabel: 'Síntomas',
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
  form.appendChild(button);
  return form;

}