"use client";
import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Hamburger from "./Hamburger";
import { useState } from "react";



const Navbar = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};


	return (
		<>
			<nav className="navigation bg-slate-400 w-min-[400px] w-[20%] p-10 ">
				<div className="hamburger" onClick={toggleHamburger}>
					<Hamburger />
				</div>

				<ul className="text-white space-y-5">
					<li className="space-x-2 flex" onClick={toggleHamburger}>
						<div>
							<HomeIcon />
						</div>
						<div>
							<Link href={"/"}>Inicio</Link>
						</div>
					</li>

					<li className="space-x-2 flex" onClick={toggleHamburger}>
						<div>
							<AssignmentIcon />
						</div>
						<div>
							<Link href={"/citas"}>Agendar cita</Link>
						</div>
					</li>

					<li className="space-x-2 flex" onClick={toggleHamburger}>
						<div>
							<InfoIcon />
						</div>
						<div>
							<Link href={"/acercade"}>Acerca de</Link>
						</div>
					</li>
				</ul>
			</nav>
			<style jsx>{`
        .navigation li{
          width: fit-content;
        }

        .hamburger{
          display: none;
        }

        @media (max-width: 1200px){
          .hamburger{
            display: block;
            padding-top: 0px;
            margin-left: 0px;
            z-index; 10px; //just in case
          }
          
          .navigation{
            width: 100px;
          }

          .navigation ul{
            display: ${hamburgerOpen ? "block" : "none"};
            background-color: grey;
            height: 30vh;
            width: 30vw;
            border-radius: 15px;
            margin-top: 0px;
            position: fixed;
            padding: 15px;
          }

        `}</style>
		</>
	);
};

export default Navbar;
