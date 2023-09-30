import React, { useState } from "react";

const Form = ({ setResultado, setError }) => {
	const [estatura, setEstatura] = useState("");
	const [peso, setPeso] = useState("");
	const [errorFormulario, setErrorFormulario] = useState(false);

	const buttonHandler = (e) => {
		e.preventDefault();

		if ([estatura, peso].includes("")) {
			setErrorFormulario(true);
			return;
		}

		setErrorFormulario(false);
		setResultado(peso / ((estatura / 100) * (estatura / 100)));
		setError(false);
	};

	const limpiar = () => {
		setPeso("");
		setEstatura("");
		setErrorFormulario("");
		setResultado("");
	};
	return (
		<div>
			<form className="flex flex-col items-center space-y-3 border border-slate-700 p-4">
				{errorFormulario && (
					<div className="bg-red-500 rounded-md font-bold  ">
						{" "}
						ERROR DEBES LLENAR LOS CAMPOS
					</div>
				)}

				<div className="flex flex-col w-full">
					<label htmlFor="" className="uppercase font-bold">
						Estatura
					</label>
					<input
						type="number"
						placeholder="Estatura en CM"
						className="bg-blue-200 p-2 rounded-md"
						value={estatura}
						onChange={(e) => setEstatura(e.target.value)}
					/>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="" className="uppercase font-bold ">
						Peso
					</label>
					<input
						type="number"
						placeholder="Peso en KG"
						className="bg-blue-200 p-2 rounded-md "
						value={peso}
						onChange={(e) => setPeso(e.target.value)}
					/>
				</div>
				<div className="flex w-full justify-end">
					<input
						type="button"
						value={"Calcular BMI"}
						className="bg-purple-300 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
						onClick={buttonHandler}
					/>
				</div>
				<div className="flex w-full justify-end">
					<input
						type="button"
						value={"Limpiar"}
						className="bg-emerald-300 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
						onClick={limpiar}
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
