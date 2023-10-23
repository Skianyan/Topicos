import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="w-full bottom-0 bg-[purple] text-white py-10 mb-0 mt-32">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mr-48 ml-48">
				<div>
					<Image
						src={"logoheader.svg"}
						width={0}
						height={0}
						alt="logo"
						style={{ width: 260, height: 60 }}
						priority
					/>
				</div>
				<div>
					<p className="mb-2 text-[16px]">Enlaces</p>
					<ul className="list-none text-[13px]">
						<li>Participa</li>
						<li>Publicaciones Oficiales</li>
						<li>Marco Jurídico</li>
						<li>Plataforma Nacional de Transparencia</li>
					</ul>
				</div>
				<div>
					<p className="text-[16px]">¿Qué es gob.mx?</p>
					<p className="mb-2 text-[13px]">
						Es el portal único de trámites, información y participación
						ciudadana.
					</p>
					<ul className="list-none text-[13px]">
						<li>Portal de datos abiertos</li>
						<li>Declaración de accesibilidad</li>
						<li>Aviso de privacidad integral</li>
						<li>Aviso de privacidad simplificado</li>
						<li>Términos y condiciones</li>
						<li>Política de seguridad</li>
						<li>Mapa del sitio</li>
					</ul>
				</div>
				<div>
					<p>Denuncia contra servidores públicos</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
