import React from "react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="flex p-3 bg-[purple] text-white justify-evenly w-full absolute bottom-0 h-24">
			<div className="absolute left-10 mt-4">
				<Image
					src={"logoheader.svg"}
					width={0}
					height={0}
					alt="logo"
					style={{ width: 140, height: 40 }}
					priority
				/>
			</div>
			<div className="flex items-end list-none">
				<li></li>
				<li></li>
			</div>
		</footer>
	);
};

export default Footer;
