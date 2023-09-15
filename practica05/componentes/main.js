import './style.css';

import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

const mainCard = document.createElement("div");
mainCard.classList = "mainCard";
const formCard = document.createElement("div");
formCard.classList = "formCard";

mainCard.appendChild(Header({ title: 'Consultorio' }));
formCard.appendChild(Formulario());

mainCard.appendChild(formCard)
document.body.appendChild(mainCard)