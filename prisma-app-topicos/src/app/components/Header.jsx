import React from "react";
import Image from "next/image";

const Header = () => {
	return (
		<header className="flex p-3 bg-[#25477b] text-white justify-evenly h-48 items-center">
			<a href="./">
				<Image
					src={"/artistdb.png"}
					width={462}
					height={220}
					alt="logo"
					style={{ width: "auto", height: 160 }}
					priority
				/>
			</a>
		</header>
	);
};

export default Header;
