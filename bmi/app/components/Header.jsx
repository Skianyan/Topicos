import React from "react";
import Image from "next/image";

const Header = () => {
	return (
		<header className="flex p-3 bg-[purple] text-white justify-evenly">
			<Image
				src={"logoheader.svg"}
				width={0}
				height={0}
				alt="logo"
				style={{ width: 140, height: 40 }}
				priority
			/>
			<nav className="flex items-center list-none space-x-5">
				<li>Registro para vacunación</li>
				<li>Información sobre COVID-19</li>
				<li>Trámites</li>
				<li>Gobierno</li>
				<li>
					<img src="https://framework-gb.cdn.gob.mx/landing/img/lupa.png" />
				</li>
			</nav>
		</header>
	);
};

export default Header;
