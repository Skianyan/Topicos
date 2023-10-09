import React from "react";
import Link from "next/link";
import Image from "next/image";
const AcercaDePage = () => {
	return (
		<div className="w-full">
			<div className="bg-sky-200 border-2 border-slate-300 rounded-lg p-4 m-14  flex flex-col">
				<div className="bg-blue-300 rounded-md p-2 text-center ">Acerca de</div>
				<div className="grid mt-5 space-x-2 space-y-2 grid-cols-5">
					<Image
						src="/iconskia.png"
						width={100}
						height={100}
						alt="me"
						className="justify-self-center w-min-[100px]"
					/>
					<div className="col-span-4">
						Hola!, Soy Ricardo Haro, gracias por ver mi pagina web hecha con
						react, estoy aprendiendo a utilizar este y otros frameworks. Si
						gustas puedes visitar mis redes sociales
					</div>
					<Link
						className="justify-self-center text-purple-600"
						href={"https://www.github.com/skianyan"}
					>
						GitHub
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AcercaDePage;
