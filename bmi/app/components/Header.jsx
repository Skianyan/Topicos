import React from "react";
import logo from "./logo.svg";
const Header = () => {
	return (
		<header className="flex p-3 bg-emerald-950 text-white justify-evenly">
			<img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Logo_del_Gobierno_de_M%C3%A9xico_%282018%29.png" alt="logo"
			className="w-20" />
			<nav className="flex list-none space-x-5 font-sans font-thin">
				<li>Registro de vacunacion</li>
				<li>Informacion sobre COVID-19</li>
				<li>Tramites</li>
				<li>Gobierno</li>
				<li><img src="search.png"/></li>
			</nav>
		</header>
	);
};

export default Header;
