"use client";

import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const [isShowing, setIsShowing] = useState(false);
	return (
		<header className="sm:w-[25%] sm:min-w-[170px] bg-slate-400 p-2">
			{/* Normal Menu */}
			<Popover className="hidden sm:flex flex-col w-full h-full bg-slate-400 p-4 items-center">
				<ul className="text-white space-y-5 ">
					<li className="space-x-2 flex">
						<div>
							<HomeIcon />
						</div>
						<div>
							<Link href={"/"}>Inicio</Link>
						</div>
					</li>

					<li className="space-x-2 flex">
						<div>
							<AssignmentIcon />
						</div>
						<div>
							<Link href={"/citas"}>Agendar cita</Link>
						</div>
					</li>

					<li className="space-x-2 flex">
						<div>
							<InfoIcon />
						</div>
						<div>
							<Link href={"/acercade"}>Acerca de</Link>
						</div>
					</li>
				</ul>
			</Popover>
			{/* Responsive Menu */}
			<Popover className="sm:hidden">
				<Popover.Button onClick={() => setIsShowing((isShowing) => !isShowing)}>
					{isActive ? (
						<AiFillCloseCircle size={30}
							onClick={() => {
								setIsActive(!isActive);
							}}
						/>
					) : (
						<AiOutlineMenu size={30}
							onClick={() => {
								setIsActive(!isActive);
							}}
						/>
					)}
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
					<Popover.Panel className="bg-slate-500 absolute w-[85%] h-full rounded-lg p-2">
						<ul className="text-white space-y-5 ">
							<li className="space-x-2 flex">
								<div>
									<HomeIcon />
								</div>
								<div>
									<Link href={"/"}>Inicio</Link>
								</div>
							</li>

							<li className="space-x-2 flex">
								<div>
									<AssignmentIcon />
								</div>
								<div>
									<Link href={"/citas"}>Agendar cita</Link>
								</div>
							</li>

							<li className="space-x-2 flex">
								<div>
									<InfoIcon />
								</div>
								<div>
									<Link href={"/acercade"}>Acerca de</Link>
								</div>
							</li>
						</ul>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
	);
};

export default Navbar;
