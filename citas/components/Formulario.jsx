import React from "react";

const Formulario = () => {
	return (
		<>
			<form className="bg-sky-200 space-y-2 border border-slate-500 p-4 rounded-md">
				<div className="flex flex-col space-y-1">
					<label htmlFor="nombre" className="font font-semibold uppercase">
						Nombre
					</label>
					<input
						type="text"
						id="nombre"
						className="p-2 rounded-md"
						placeholder="Nombre del paciente"
					/>
				</div>
                <div className="flex flex-col space-y-1">
					<label htmlFor="edad" className="font font-semibold uppercase">
						Edad
					</label>
					<input
						type="text"
						id="edad"
						className="p-2 rounded-md"
						placeholder="Edad del paciente"
					/>
                <div className="flex flex-col space-y-1">
					<label htmlFor="genero" className="font font-semibold uppercase">
						Genero
					</label>
					<input
						type="text"
						id="genero"
						className="p-2 rounded-md"
						placeholder="Genero del paciente"
					/>
				</div>        
				</div>
                <div className="flex flex-col space-y-1">
					<label htmlFor="telefono" className="font font-semibold uppercase">
						Telefono
					</label>
					<input
						type="text"
						id="telefono"
						className="p-2 rounded-md"
						placeholder="Telefono del paciente"
					/>
				</div>
                <div className="flex flex-col space-y-1">
					<label htmlFor="sintomas" className="font font-semibold uppercase">
						Sintomas
					</label>
					<textarea
						type="text"
						id="sintomas"
						className="p-2 rounded-md resize-none"
						placeholder="Sintomas del paciente"
					/>
				</div>
                <div>
                    <button className="bg-emerald-300 rounded-md p-3 mt-4">Agendar Cita</button>
                </div>
			</form>
		</>
	);
};

export default Formulario;
