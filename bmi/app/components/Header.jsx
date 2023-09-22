import React from "react";

const Header = () => {
	return (
		<header className="flex p-3 bg-slate-700 text-white justify-evenly">
			<h1>LOGO</h1>
			<nav className="flex list-none">
				<li>Registro de vacunacion</li>
				<li>Informacion sobre COVID-19</li>
				<li>Tramites</li>
				<li>Gobierno</li>
			</nav>
		</header>
	);
};

export default Header;
