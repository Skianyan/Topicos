"use client";

import React from "react";
import { Popover, Transition } from "@headlessui/react";

import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isShowing, setIsShowing] = useState(false);
	return (
		<header>
			{/* Normal Menu */}
			<Popover className="hidden sm:flex justify-evenly bg-slate-400 p-4">
				<div>LOGO</div>
				<div>LINK</div>
				<div>BOTONES</div>
			</Popover>
			{/* Responsive Menu */}
			<Popover className="sm:hidden">
				<Popover.Button onClick={() => setIsShowing((isShowing) => !isShowing)}>
					<AiOutlineMenu size="30"></AiOutlineMenu>
				</Popover.Button>

				<Transition
					show={isShowing}
					enter="transition-opacity duration-75"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Popover.Panel className="bg-slate-500 absolute w-[85%] h-full rounded-lg">
						<div className="flex flex-col ml-4 gap-2 p-2">
							<div className="flex ">
								<AiFillHome></AiFillHome>
								<Link href="/">Inicio</Link>
							</div>

							<Link href="/">Tienda</Link>
							<Link href="/">Acerca de</Link>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
	);
};

export default Navbar;
