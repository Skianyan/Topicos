import React from "react";
import Image from "next/image";

const Header = () => {
	return (
		<header className="flex p-3 bg-slate-600 text-white justify-evenly h-20 items-center">
			<Image
				src={"/sadzon.png"}
				width={462}
				height={220}
				alt="logo"
				style={{ width: "auto", height: 60 }}
				priority
			/>
			<nav className="flex list-none space-x-5 items-center">
				<input
					className="hidden sm:flex rounded-md p-1"
					type="text"
					placeholder="Search.."
				/>
				<p>My Cart</p>
				<div className="border-2 rounded-[50%] border-slate-800">
					<Image
						src={"/profile.png"}
						width={200}
						height={200}
						style={{ width: "auto", height: 40 }}
						className="rounded-full"
					/>
				</div>
			</nav>
		</header>
	);
};

export default Header;
