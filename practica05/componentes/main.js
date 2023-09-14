import './style.css';

import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

document.body.appendChild(Header({ title: 'Consultorio' }));

document.body.appendChild(Formulario());