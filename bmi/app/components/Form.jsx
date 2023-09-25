import React from "react";

const Form = () => {
	return (
		<div>
			<form className="flex flex-col items-center space-y-3 border border-slate-700 p-4">
				<div className="flex flex-col w-full">
					<label htmlFor="" className="uppercase font-bold">
						Estatura
					</label>
					<input
						type="text"
						placeholder="Estatura en CM"
						className="bg-blue-200 p-2 rounded-md"
					/>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="" className="uppercase font-bold ">
						Peso
					</label>
					<input
						type="text"
						placeholder="Peso en KG"
						className="bg-blue-200 p-2 rounded-md "
					/>
				</div>
				<div className="flex w-full justify-end">
					<input
						type="button"
						value={"Calcular BMI"}
						className="bg-purple-200 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
