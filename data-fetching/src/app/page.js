import React from "react";
import Link from "next/link";

const page = () => {
	return (
		<div className="flex flex-col m-2 space-y-2 h-full min-h-[75vh]">
			<Link
				className="bg-slate-300 p-2 w-52 rounded-md border border-slate-800"
				href={"/dummyapi"}
			>
				dummyapi
			</Link>
			<Link
				className="bg-slate-300 p-2 w-52 rounded-md border border-slate-800"
				href={"/fakestoreapi"}
			>
				fakestoreapi
			</Link>
		</div>
	);
};

export default page;
